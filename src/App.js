import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import Card2 from './Components/Card2'
import Current from './Components/Current-Weather'
import Location from './Components/Location';


const CurrentWeather = Current(Card2);


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
          <CurrentWeather
            location={this.state.location}
            units={this.state.units}
            tempUnit={this.state.tempUnit}
          />
        </div>
        <div>
          <h3>5-Day Forecast</h3>
          <Card location={this.state.location} />
          <Card location={this.state.location} />
          <Card location={this.state.location} />
          <Card location={this.state.location} />
          <Card location={this.state.location} />
        </div>
      </div>
    );
  }
}

export default App;
