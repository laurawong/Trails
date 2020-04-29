import React, { Component } from 'react';
import '../styles/Hike.scss'
import '../styles/trails-patterns.scss';
import StarRatings from 'react-star-ratings';
import noImg from '../styles/images/No_Image_Available.jpg'

class Hike extends Component {
  constructor(props) {
    super(props);
    this.difficulty = {
      'dblack': 'Very Difficult',
      'black': 'Difficult',
      'blue': 'Intermediate',
      'green': 'Easy'
    }
  }

  render() {
    return (
      <div class='hike-container'>
        <div class='hike-img-container'>
          {this.props.trail.imgMedium
            ? <img class='hike-img' src={this.props.trail.imgMedium} alt="hike" />
            : <img class='hike-img' src={noImg} alt="Not available" />
          }
          
        </div>
        <div class='hike-text'>
          <div class='hike-title'>
            <p class='hike-name'>{this.props.trail.name}</p>
            <p class='hike-location'>{this.props.trail.location}</p>
          </div>
          <div class='hike-stats'>
            <StarRatings
              rating={this.props.trail.stars}
              starRatedColor="black"
              numberOfStars={5}
              name='rating'
              starDimension="15px"
              starSpacing='1px'
            /> 
            - {this.difficulty[this.props.trail.difficulty]} - {this.props.trail.length} mi - {this.props.trail.ascent} ft
          </div>
          <p>{this.props.trail.summary}</p>
          {this.props.trail.conditionDetails
            ? <p>Trail condition: {this.props.trail.conditionDetails} (last updated on {this.props.trail.conditionDate})</p>
            : <p>Trail condition: unknown</p>
          }
        </div>
      </div>
    );
  }
}

export default Hike;