import React, { Component } from 'react';
import '../styles/Header.scss'
import '../styles/trails-patterns.scss';
import searchIcon from '../styles/images/search-icon.svg';


class Header extends Component {
  render() {
    return (
      <header class="header"> 
        <div class="header-inner">
          <a href="/" class="header-title text--xlarge">
            Trails
          </a>
          <a href="/search">
            <img class='search-icon' src={searchIcon} alt="search icon" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;