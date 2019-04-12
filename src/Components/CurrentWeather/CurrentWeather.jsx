import React from "react";
import getCurrent from "../../api/currentWeatherAPI";
import { TimeCard } from "../TimeCard/TimeCard";
import styles from "./CurrentWeather.module.css";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      temp: "",
      icon: "",
      description: ""
    };
  }

  async componentDidUpdate(prevProps) {
    const { location, units, isLoading, tempUnit } = this.props;

    if (location !== prevProps.location) {
      const currentWeather = await getCurrent(location, units);

      this.setState({
        date: currentWeather.date,
        temp: `${currentWeather.temp} ${tempUnit}`,
        icon: currentWeather.icon,
        description: currentWeather.description
      });
    }
  }

  async componentDidMount() {
    const { location, units, isLoading, tempUnit } = this.props;

    //isLoading();
    const currentWeather = await getCurrent(location, units);

    this.setState({
      date: currentWeather.date,
      temp: `${currentWeather.temp} ${tempUnit}`,
      icon: currentWeather.icon,
      description: currentWeather.description
    });
  }

  render() {
    const { icon, temp } = this.state;
    if (!icon) {
      return <div>Loading...</div>;
    }
    const iconSrc = require(`../../common/icons/${icon}.svg`);
    return (
      <div className={styles.Container}>
        <TimeCard temp={temp} iconSrc={iconSrc} time="Currently" />
      </div>
    );
  }
}

export default CurrentWeather;
