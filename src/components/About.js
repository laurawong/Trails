import React, { Component } from 'react';
import '../styles/About.scss'
import '../styles/trails-patterns.scss';

class About extends Component {
  render() {
    return (
      <div id='about' class='about-container'>
        <div class='about-text text'>
          <h1>
            Hello <span role='img' aria-label="wave">👋🏻</span>
          </h1>
          <p>
            My name is Laura. This is my side project powered by React, Flask and my love for hiking.
          </p>
          <p>
            Trail data is from the <a class='link' href='https://www.hikingproject.com/data'>Hiking Project</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default About;