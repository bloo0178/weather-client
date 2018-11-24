import React, { Component } from 'react';
import './App.css';
import Current from './Components/Current-Weather'
import Location from './Components/Location';
import Forecast from './Components/Forecast';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'zip=06831,us',
      units: 'imperial', //offer ability to select
      tempUnit: 'F',
    }
  }

  //modify this to pull in zip or city/state - cross against city code???
  getLocation = (location) => {
    this.setState({ location: location })
  }


  render() {
    return (
      <div className='App-Wrapper'>
        <Location getLocation={this.getLocation} />
        <h1>{this.state.location}</h1>
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

export default App;
