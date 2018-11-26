import React, { Component } from 'react';
import './App.css';
import Current from './Components/Current-Weather/Current-Weather'
import LocationSearchInput from './Components/Location';
import Forecast from './Components/Forecast/Forecast';
import Search from './Components/Location2'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //location: '',
      location: 'zip=06831,us', //will need to set to format for lat/ lng
      locationName: 'DEFAULT',
      units: 'imperial', //offer ability to select
      tempUnit: 'F',
    }
  }

  

  //modify this to pull in zip or city/state - cross against city code???
  getLocation = (location, locationName) => {
    this.setState({
      location: location,
      locationName: locationName
    })
  }



  render() {
    if (this.state.location === '') {
      return (
        <div className='App-Wrapper'>
          <LocationSearchInput getLocation={this.getLocation} />
          <h3>Enter a location.</h3>
        </div>
      )
    } else {
      return (
        <div className='App-Wrapper'>
          {/*} <Location getLocation={this.getLocation} /> */}
          <LocationSearchInput getLocation={this.getLocation} />
          <h1>{this.state.locationName}</h1>
          <div>
            <h3>Current Weather</h3>
            <Current
              location={this.state.location}
              units={this.state.units}
              tempUnit={this.state.tempUnit}
            />
          </div>
          <div>
            <h3>Forecast</h3>
            <Forecast
              location={this.state.location}
              units={this.state.units}
              tempUnit={this.state.tempUnit}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
