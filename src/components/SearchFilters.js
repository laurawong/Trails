import React, { Component } from 'react';
import {AiOutlineControl} from 'react-icons/ai';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../styles/SearchFilters.scss'
import Select from 'react-select'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SearchFilters extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      sortSelectValue: 'rating',
      isDescending: true,
      distanceSliderValue: 100,
      elevationSliderValue: 12000,
      ratingSliderValue: 0,
      isEasy: true,
      isMed: true,
      isDiff: true,
      isVDiff: true
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSortSelectChange = this.handleSortSelectChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault(); 
    this.setState({ showMenu: !this.state.showMenu })
  }

  handleSubmitSearch(event) {
    event.preventDefault(); 
    const { onSearchSubmit } = this.props;

    let difficulties = new Set()
    this.state.isEasy ? difficulties.add('green') : difficulties.delete('green')
    this.state.isMed ? difficulties.add('blue') : difficulties.delete('blue')
    this.state.isDiff ? difficulties.add('black') : difficulties.delete('black')
    this.state.isVDiff ? difficulties.add('dblack') : difficulties.delete('dblack')

    const searchFilters = {
      sortSelectValue: this.state.sortSelectValue,
      isDescending: this.state.isDescending,
      distanceSliderValue: this.state.distanceSliderValue,
      elevationSliderValue: this.state.elevationSliderValue,
      ratingSliderValue: this.state.ratingSliderValue,
      difficulties: difficulties
    }

    onSearchSubmit(searchFilters);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  handleSortSelectChange(event) {
    const value = event.value;
    this.setState({
      sortSelectValue: value
    });
  }

  handleSliderChange = (name, val) => {
    if (name === 'ratingSliderValue')
      val = val.toFixed(1)

    this.setState({
      [name]: val
    })
  };

  render() {
    const options = [
      { value: 'stars', label: 'Rating' },
      { value: 'length', label: 'Distance' },
      { value: 'difficulty', label: 'Difficulty' }
    ]

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        borderRadius: 20,
        boxShadow: "none",
      })
    };
    
    return (
      <div class='search-options-container'>
        <div class='search-options-button-container'>
          <button id='dropdown-button' class='search-options-button' onClick={this.showMenu}>
            <AiOutlineControl size={30}/> 
          </button>
        </div>
        {
          this.state.showMenu
            ? (
              <div className="search-menu">
                <form class='search-form' onSubmit={this.handleSubmitSearch}>
                  <div class="sort-select-container">
                    <div class='sort-text-container'>
                      <span class='sort-text'>Sort by:</span> 
                        <Select
                          defaultValue={options[0]}
                          name="sortSelectValue"
                          onChange={this.handleSortSelectChange}
                          className='sort-select'
                          options={options}
                          styles={customStyles}
                          isSearchable={false}
                        />
                    </div>
                    <div class='isDescending-container'>
                      <label>
                        Descending?
                          <Checkbox
                            className='isDescending-checkbox'
                            name="isDescending"
                            checked={this.state.isDescending}
                            onChange={this.handleInputChange}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                      </label>
                    </div>
                  </div>
                  <div class='search-sliders'>
                    <div class='distance-slider slider'>
                      <span class='distance-slider-label slider-label'>Distance: {this.state.distanceSliderValue} mi </span>
                      <Slider
                        min={0}
                        max={100}
                        value={this.state.distanceSliderValue}
                        onChange={(e) => this.handleSliderChange('distanceSliderValue', e)}
                      />
                    </div>
                    <div class='elevation-slider slider'>
                      <span class='elevation-slider-label slider-label'>Elevation: {this.state.elevationSliderValue} ft </span>
                      <Slider
                        min={0}
                        max={12000}
                        value={this.state.elevationSliderValue}
                        onChange={(e) => this.handleSliderChange('elevationSliderValue', e)}
                      />
                    </div>
                    <div class='rating-slider slider'>
                      <span class='rating-slider-label slider-label'>Rating: {this.state.ratingSliderValue} stars </span>
                      <Slider
                        min={0.0}
                        max={5.0}
                        step={0.1}
                        value={this.state.ratingSliderValue}
                        onChange={(e) => this.handleSliderChange('ratingSliderValue', e)}
                      />
                    </div>
                  </div>
                  <div class='difficulty-checkboxes'>
                    <div class='isEasy-container'>
                        <label>
                          Easy
                            <Checkbox
                              className='material-checkbox'
                              name="isEasy"
                              checked={this.state.isEasy}
                              onChange={this.handleInputChange}
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </label>
                      </div>
                      <div class='isMed-container'>
                        <label>
                          Intermediate
                            <Checkbox
                              className='material-checkbox'
                              name="isMed"
                              checked={this.state.isMed}
                              onChange={this.handleInputChange}
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </label>
                      </div>
                      <div class='isDiff-container'>
                        <label>
                          Difficult
                            <Checkbox
                              className='material-checkbox'
                              name="isDiff"
                              checked={this.state.isDiff}
                              onChange={this.handleInputChange}
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </label>
                      </div>
                      <div class='isVDiff-container'>
                        <label>
                          Very Difficult
                            <Checkbox
                              className='material-checkbox'
                              name="isVDiff"
                              checked={this.state.isVDiff}
                              onChange={this.handleInputChange}
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </label>
                      </div>
                  </div>  
                  <Button type='submit' variant="contained">Filter</Button>
                </form>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default SearchFilters;