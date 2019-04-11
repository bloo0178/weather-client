import React, { Component } from "react";
import styles from "./App.module.scss";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import CurrentWeatherNEW from '../Components/CurrentWeather/CurrentWeatherNEW';
import LocationSearch from "../Components/LocationSearch/LocationSearch";
import Forecast from "../Components/Forecast/Forecast";
import Test from '../Components/Test/Test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      locationName: "DEFAULT",
      units: "imperial", //offer ability to select
      tempUnit: "F"
    };
  }

  getLocation = (location, locationName) => {
    this.setState({
      location: location,
      locationName: locationName
    });
  };

  render() {
    const { location, locationName, units, tempUnit } = this.state;
    if (location === "") {
      return (
        <div className={styles.appWrapper}>
          <LocationSearch getLocation={this.getLocation} />
        </div>
      );
    } else {
      return (
        <div className={styles.appWrapper}>
          <LocationSearch getLocation={this.getLocation} />
          <h1>{locationName}</h1>
          <div>
            <CurrentWeather
              location={location}
              units={units}
              tempUnit={tempUnit}
            />
            <CurrentWeatherNEW
              location={location}
              units={units}
              tempUnit={tempUnit}
            />
          </div>
          <div>
            <Forecast location={location} units={units} tempUnit={tempUnit} />
          </div>
        </div>
      );
    }
  }
}

export default App;
