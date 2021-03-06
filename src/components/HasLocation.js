import React, { Component } from 'react';
import '../styles/trails-patterns.scss';
import Footer from './Footer';
import HikesContainer from './HikesContainer';
import SearchFilters from './SearchFilters';

class HasLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      error: null,
      isLoaded: false,
      trails: [],
      displayTrails: [],
      items: []
    };

    this.baseURL = 'https://www.hikingproject.com/data/get-trails?'
    this.latURL = 'lat=' + this.state.latitude
    this.lonURL = '&lon=' + this.state.longitude
    this.defaultsURL = '&maxResults=50&maxDistance=10'
    this.key = '&key=' + process.env.REACT_APP_HIKING_API_KEY
    this.apiReq = this.baseURL + this.latURL + this.lonURL + this.defaultsURL + this.key;

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.hikesContainer = React.createRef();
  }

  componentDidMount() {
    this.getHikesReq(this.apiReq);
  }

  getHikesReq = apiReq => {
    fetch(apiReq)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            trails: result.trails,
            displayTrails: result.trails,
            items: result.trails.slice(0, 10)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  updateLocation = () => {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      error: null,
      isLoaded: false,
      trails: [],
      displayTrails: [],
      items: []
    }, () => {
      this.latURL = 'lat=' + this.state.latitude
      this.lonURL = '&lon=' + this.state.longitude
      this.apiReq = this.baseURL + this.latURL + this.lonURL + this.defaultsURL + this.key;
      this.getHikesReq(this.apiReq);
    });
  }

  sortCompare = prop => {
    return function(a, b) {  
      if (a[prop] > b[prop]) {  
        return prop === 'difficulty' ? -1 : 1;  
      } else if (a[prop] < b[prop]) {  
        return prop === 'difficulty' ? 1 : -1; 
      }  
      return 0;  
    }  
  } 

  onSearchSubmit = searchFilters => {
    // Sorting hikes
    let resultTrails = this.state.trails.sort(this.sortCompare(searchFilters.sortSelectValue));
    if (searchFilters.isDescending) {
      resultTrails.reverse();
    }

    // Filter by distance, elevation, rating and difficulty
    resultTrails = resultTrails.filter(trail => trail.length <= searchFilters.distanceSliderValue)
    resultTrails = resultTrails.filter(trail => trail.ascent <= searchFilters.elevationSliderValue)
    resultTrails = resultTrails.filter(trail => trail.stars >= searchFilters.ratingSliderValue)
    resultTrails = resultTrails.filter(trail => searchFilters.difficulties.has(trail.difficulty))

    this.setState({
      displayTrails: resultTrails,
      items: resultTrails.slice(0, 10)
    }, () => {
      this.hikesContainer.current.updateTrailData();
    });
  }


  render() {
    const { error, isLoaded, displayTrails, items} = this.state;

    if (error) {
      return <div class='loading-text'>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div class='loading-text'>Loading...</div>;
    } else {
      return (
        <div>
          <SearchFilters onSearchSubmit={this.onSearchSubmit}/>
          <HikesContainer ref={this.hikesContainer} trails={displayTrails} items={items}/>
          <Footer/>
        </div>
      );
    }
  }
}

export default HasLocation;