import React, { Component } from 'react';
import '../styles/NoLocation.scss'
import '../styles/trails-patterns.scss';
import Footer from './Footer';
import hikingImg from '../styles/images/no-location.jpg'

class NoLocation extends Component {
  render() {
    return (
      <div>
        <div class='no-location-container'>
          <div class='no-location-img-container'>
            <img class='no-location-img' src={hikingImg} alt="enable location" />
            <h2 class='no-location-img-text image-text'> Darn... </h2>
          </div>
          <h2 class='text'> Please enable your location to see nearby trails. </h2>
        </div>
        <Footer className='footer-bottom'/>
      </div>
    );
  }
}

export default NoLocation;