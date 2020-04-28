import React, { Component } from 'react';
import '../styles/Nearby.scss'
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
    return (
      <NearbyLanding latitude={this.state.latitude} longitude={this.state.longitude}/>
    );
  }
}

function NearbyLanding(props) {
  const hasLocation = props.latitude && props.longitude;
  if (hasLocation) {
    return <HasLocation latitude={props.latitude} longitude={props.longitude}/>;
  } else {
    return <NoLocation/>
  }
}

export default Nearby;