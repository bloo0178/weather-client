import React, { Component } from "react";
import styles from "./App.module.css";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import Forecast from "../Components/Forecast/Forecast";
import LocationSearch from '../Components/LocationSearch/LocationSearch';
import CarouselTest2 from "../Components/Test/Carousel2/Carousel2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      locationName: "",
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
        <div className={styles.Container}>
          <LocationSearch getLocation={this.getLocation} />
        </div>
      );
    } else {
      return (
        <div className={styles.Container}>
          <LocationSearch getLocation={this.getLocation} />
          <h1>{locationName}</h1>
     
            <CurrentWeather
              location={location}
              units={units}
              tempUnit={tempUnit}
            />
    
          <div>
            <Forecast location={location} units={units} tempUnit={tempUnit} />
          </div>
        </div>
      );
    }
  }
}

export default App;
