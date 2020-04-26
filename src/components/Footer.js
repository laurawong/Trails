import React, { Component } from 'react';
import '../styles/Footer.scss'
import '../styles/trails-patterns.scss';
import {FaLinkedin} from 'react-icons/fa';
import {MdWeb} from 'react-icons/md';

class Footer extends Component {
  render() {
    return (
      <footer class='text'>
        <div class='footer-container'>
          <h1 id='contact' class='footer-header'>STAY CONNECTED</h1>
          <a class='link' href='https://www.linkedin.com/in/laura-wong/' target="_blank" rel="noopener noreferrer"> <FaLinkedin size={25}/> </a>
          <a class='link' href='https://laurawong.github.io' target="_blank" rel="noopener noreferrer"> <MdWeb size={25}/> </a>
        </div>
      </footer>
    );
  }
}

export default Footer;