import React, { Component } from 'react';
import './index.css';
import SearchInput from './components/search-input/search-input';
import SearchOutput from './components/search-output/search-output';
import {getLatLongFromGoogleGeocoder, getWoeId, getWeatherInfo} from '../src/util/js/api-helpers';
import Spinner from 'react-spinkit';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);

    this.state = {
      searchInputText: '',
      searchResults: null,
      isProgressBarEnabled: false
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSearchButtonClicked();
    }
  }

  //arrow functions - not used this in the sf lightning framework - (parameters) => { statements }
  //promises instead of callbacks

  onSearchButtonClicked() {
    if(this.state.searchInputText) {
      this.setState({
        isProgressBarEnabled: true
      });
      const address = this.state.searchInputText;
      getLatLongFromGoogleGeocoder(address)
      .then(latLong => {
        if(latLong) {
          getWoeId(latLong)
          .then(woeId => {
            if(woeId) {
              getWeatherInfo(woeId)
              .then((weatherResults) => {
                this.setState(
                  {
                    searchResults: weatherResults,
                    isProgressBarEnabled: false
                  }
                );
              });
            }
          });
        }
      });
    }
  }

  onSearchTextChanged(evt) {
    this.setState({
      searchInputText: evt.target.value
    });
  }

  render() {
    if(this.state.isProgressBarEnabled) {
      return (
        <div className="row center-xs progress-indicator">
          <Spinner name="ball-grid-pulse" />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="main-content">
            <SearchInput searchText={this.state.searchInputText} onSearchButtonClicked={this.onSearchButtonClicked} onSearchTextChanged={this.onSearchTextChanged} handleKeyPress={this.handleKeyPress} />
            <SearchOutput searchResults={this.state.searchResults}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
