import React, { Component } from 'react';
import '../styles/HasLocation.scss'
import '../styles/trails-patterns.scss';
import Footer from './Footer';
import Hike from './Hike';

class HasLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      error: null,
      isLoaded: false,
      trails: []
    };
  }

  componentDidMount() {
    fetch('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200411841-dde103263e756ea031802ede98f125c9')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            trails: result.trails
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

  render() {
    const { error, isLoaded, trails } = this.state;

    const items = [];

    for (var i = 0; i < trails.length; i++) {
      items.push(<Hike trail={trails[i]} />)
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items}
          <Footer/>
        </div>
      );
    }
  }
}

export default HasLocation;