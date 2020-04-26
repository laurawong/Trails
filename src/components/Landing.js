import React, { Component } from 'react';
import '../styles/Landing.scss'
import '../styles/trails-patterns.scss';
import hikingImg from '../styles/images/hiking.jpg';
import mountainImg1 from '../styles/images/mountain.jpg';
import mountainImg2 from '../styles/images/pink-mountain.jpg';

class Landing extends Component {
  render() {
    return (
      <div class='landing-cards'>
        <img class='hiking-img' src={hikingImg} alt="search icon" />
        <div class='cards-column'>
          <img class='mountain-img' src={mountainImg1} alt="search icon" />
          <img class='mountain-img' src={mountainImg2} alt="search icon" />
        </div>
      </div>
    );
  }
}

export default Landing;