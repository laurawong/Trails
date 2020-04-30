import React, { Component } from 'react';
import '../styles/Search.scss'
import '../styles/trails-patterns.scss';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HasLocation from './HasLocation';
import Footer from './Footer';

class Search extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      apiIsReady: false,
      geocoder: null,
      latitude: null,
      longitude: null
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.hasLocation = React.createRef();
  }

  componentDidMount() {
    if (!this.apiIsReady) {
      const ApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&libraries=places,geocoding`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => {
        this.setState({ 
          apiIsReady: true,
          geocoder: new window.google.maps.Geocoder()
        });
      });

      document.body.appendChild(script);
    }
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    var address = document.getElementById('search-query').value;

    this.state.geocoder.geocode({ 'address': address}, (results, status) => {
      if (status === 'OK') {
        this.setState({
          latitude: results[0].geometry.location.lat(),
          longitude: results[0].geometry.location.lng()
        }, () => {
          if (this.hasLocation.current != null)
            this.hasLocation.current.updateLocation();
        }); 
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  render() {
    const {latitude, longitude} = this.state;
    const hasLocation = latitude && longitude;
    const searchBoxStyle = {
      margin: hasLocation 
      ? '20px 0px' 
      : '4em 0px'
    }

    return (
      <div>
        <div style={searchBoxStyle} class='searchbox-container'>
          <Paper component="form" onSubmit={this.handleSearchSubmit}>
            <InputBase
              autoComplete='off'
              id='search-query'
              placeholder="Search for your next adventure..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
        </Paper>
      </div>
      { hasLocation ?
        (<HasLocation ref={this.hasLocation} latitude={latitude} longitude={longitude}/>) :
        (<Footer className='footer-bottom'/>)
      }
    </div>
    );
  }
}

export default Search;