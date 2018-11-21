import React, { Component } from 'react';
import './App.css';
import DayCard from './Components/DayCard';
import Location from './Components/Location';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ''
    }
  }

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
          <DayCard location={this.state.location}/>
        </div>
        <div>
          <h3>5-Day Forecast</h3>
          <DayCard location={this.state.location}/>
          <DayCard location={this.state.location}/>
          <DayCard location={this.state.location}/>
          <DayCard location={this.state.location}/>
          <DayCard location={this.state.location}/>
        </div>
      </div>
    );
  }
}

export default App;
