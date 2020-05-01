import React, { Component } from 'react';
import '../styles/About.scss'
import '../styles/trails-patterns.scss';

class About extends Component {
  render() {
    const waveEmoji = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png'
    
    return (
      <div id='about' class='about-container'>
        <div class='about-text text'>
          <h1>
            Hello <span role='img' aria-label="wave"><img class='wave-icon' src={waveEmoji} alt="wave emoji" /></span>
          </h1>
          <p>
            My name is Laura. This is my <a class='link' href='https://github.com/laurawong/Trails'>project</a> powered by React and my love for hiking.
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