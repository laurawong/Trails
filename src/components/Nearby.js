import React, { Component } from 'react';
import '../styles/trails-patterns.scss';
import NoLocation from './NoLocation';
import HasLocation from './HasLocation';

class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude:  position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }

  render() {
    const hasLocation = this.state.latitude && this.state.longitude;

    return (
      <div>
        {hasLocation
        ? <HasLocation latitude={this.state.latitude} longitude={this.state.longitude}/>
        : <NoLocation/>
        }
      </div>
    );
  }
}

export default Nearby;