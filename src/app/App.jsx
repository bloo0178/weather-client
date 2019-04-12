import React, { Component } from "react";
import styles from "./App.module.css";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import Forecast from "../Components/Forecast/Forecast";
import LocationSearch from "../Components/LocationSearch/LocationSearch";
import logo from "../common/stormLogo.svg";
import { FadeLoader } from "react-spinners";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      locationName: "",
      units: "imperial", //offer ability to select
      tempUnit: "F",
      loading: false
    };
  }

  getLocation = (location, locationName) => {
    this.setState({
      location: location,
      locationName: locationName
    });
  };

  isLoading = () => {
    let loadState;
    this.state.loading === true ? loadState = false : loadState = true;
    this.setState({
      loading: loadState
    });
  };

  render() {
    const { location, locationName, units, tempUnit, loading } = this.state;
    if (loading === true) {
      return (
        <div className={styles.Container}>
          <div className={styles.Loading}>
            <FadeLoader
              sizeUnit={"px"}
              size={150}
              color={"#000000"}
              loading={this.state.loading}
            />
          </div>
        </div>
      );
    }
    if (location === "") {
      return (
        <div className={styles.Container}>
          <img src={logo} className={styles.Logo} alt="logo" />
          <LocationSearch getLocation={this.getLocation} />
        </div>
      );
    } 
      return (
        <div className={styles.Container}>
          <LocationSearch getLocation={this.getLocation} />
          <h1>{locationName}</h1>
          <CurrentWeather
            isLoading={this.isLoading}
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

export default App;
