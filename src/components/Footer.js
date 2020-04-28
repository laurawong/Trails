import React, { Component } from 'react';
import '../styles/Footer.scss'
import '../styles/trails-patterns.scss';
import {FaLinkedin} from 'react-icons/fa';
import {MdWeb} from 'react-icons/md';
import About from './About'

class Footer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <About/>
        <footer class='text'>
          <div class='footer-container'>
            <h1 id='contact' class='footer-header'>STAY CONNECTED</h1>
            <a class='link' href='https://www.linkedin.com/in/laura-wong/' target="_blank" rel="noopener noreferrer"> <FaLinkedin size={25}/> </a>
            <a class='link' href='https://laurawong.github.io' target="_blank" rel="noopener noreferrer"> <MdWeb size={25}/> </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;