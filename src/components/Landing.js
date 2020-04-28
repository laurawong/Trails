import React, { Component } from 'react';
import '../styles/Landing.scss'
import '../styles/trails-patterns.scss';
import hikingImg from '../styles/images/hiking-text.jpg';
import mountainImg1 from '../styles/images/mountain-450.jpg';
import mountainImg2 from '../styles/images/pink-mountain-text.jpg';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div>
        <div class='landing-cards'>
          <a href='/search' class='hiking-img-link'> 
            <img class='card hiking-img' src={hikingImg} alt="search" />
          </a>
          <div class='cards-column'>
            <a href='/nearby' class='mountain-img-link'> 
              <img class='card mountain-img' src={mountainImg1} alt="nearby" />
            </a>
            <a href='#about' class='mountain-img-link'>
              <img class='card mountain-img' src={mountainImg2} alt="about" />
            </a>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Landing;