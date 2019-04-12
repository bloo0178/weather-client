import React, { Component } from "react";
import styles from "./App.module.css";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import Forecast from "../Components/Forecast/Forecast";
import LocationSearch from "../Components/LocationSearch/LocationSearch";
import logo from "../common/stormLogo.svg";
import { FadeLoader } from "react-spinners";
import getCurrent from "../api/currentWeatherAPI";
import getForecast from "../api/forecastAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      locationName: "",
      units: "imperial", 
      tempUnit: "F",
      loading: false,
      currentWeather: "",
      forecastData: ""
    };
  }

  getLocation = async (location, locationName) => {
    this.setState({ loading: true });
    const currentWeather = await getCurrent(location, this.state.units);
    const forecastData = await getForecast(location, this.state.units);
    this.setState({
      location: location,
      locationName: locationName,
      currentWeather: currentWeather,
      forecastData: forecastData
    });
    this.setState({ loading: false });
  };

  render() {
    const {
      location,
      locationName,
      tempUnit,
      loading,
      currentWeather,
      forecastData
    } = this.state;
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
        <CurrentWeather currentWeather={currentWeather} />
        <div>
          <Forecast forecastData={forecastData} tempUnit={tempUnit} />
        </div>
      </div>
    );
  }
}

export default App;
