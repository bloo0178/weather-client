import React, { Component } from "react";
import styles from "./App.module.css";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Forecast from "../components/Forecast/Forecast";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import logo from "../common/stormLogo.svg";
import { FadeLoader } from "react-spinners";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      locationName: "",
      units: "imperial",
      tempUnit: "F",
      loading: false,
      currentWeather: "",
      forecastData: ""
    };
  }

  getLocation = async (lat, lon, locationName) => {
    this.setState({ loading: true });

    const currentWeather = await axios
      .get(
        `https://buceh2uvmj.execute-api.us-east-1.amazonaws.com/dev/getweather?lat=${lat}&lon=${lon}&units=${
          this.state.units
        }`
      )
      .then(res => {
        return {
          icon: res.data.result.icon,
          temp: res.data.result.temp
        };
      });

    const forecastData = await axios
      .get(
        `https://buceh2uvmj.execute-api.us-east-1.amazonaws.com/dev/forecast?lat=${lat}&lon=${lon}&units=${
          this.state.units
        }`
      )
      .then(res => {
        return res.data.result;
      });

    this.setState({
      lat: lat,
      lon: lon,
      locationName: locationName,
      currentWeather: currentWeather,
      forecastData: forecastData
    });

    this.setState({ loading: false });
  };

  render() {
    const {
      lat,
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
    if (lat === "") {
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
