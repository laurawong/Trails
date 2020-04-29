import React, { Component } from 'react';
import {AiOutlineControl} from 'react-icons/ai';
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
      distanceSliderValue: 100
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSortSelectChange = this.handleSortSelectChange.bind(this);
    this.handleDistanceSliderChange = this.handleDistanceSliderChange.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault(); 
    this.setState({ showMenu: !this.state.showMenu })
  }

  handleSubmitSearch(event) {
    event.preventDefault(); 
    const { onSearchSubmit } = this.props;

    const searchFilters = {
      sortSelectValue: this.state.sortSelectValue,
      isDescending: this.state.isDescending,
      distanceSliderValue: this.state.distanceSliderValue
    }

    onSearchSubmit(searchFilters);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value;

    switch (name) {
      case 'isDescending':
        value = target.checked
        break;
      case 'sortSelectValue':
        value = target.value;
        break;

      default:
        console.log("wat");
        break;
    }

    this.setState({
      [name]: value
    }, () => {
      console.log("changed state ", this.state[name])
    });

  }

  handleSortSelectChange(event) {
    const value = event.value;
    this.setState({
      sortSelectValue: value
    });
  }

  handleDistanceSliderChange = value => {
    this.setState({
      distanceSliderValue: value
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
                        <input
                          class='isDescending-checkbox'
                          name="isDescending"
                          type="checkbox"
                          checked={this.state.isDescending}
                          onChange={this.handleInputChange} />
                      </label>
                    </div>
                  </div>
                  <div class='slider'>
                    <span class='distance-slider-label'>Distance: {this.state.distanceSliderValue} mi </span>
                    <Slider
                      min={0}
                      max={100}
                      value={this.state.distanceSliderValue}
                      onChange={this.handleDistanceSliderChange}
                    />
                  </div>
                  <button type='submit'> Submit </button>
                  <button> Menu item 2 </button>
                  <button> Menu item 3 </button>
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