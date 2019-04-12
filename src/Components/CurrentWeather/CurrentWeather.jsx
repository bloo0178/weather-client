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

  componentDidUpdate(prevProps) {
    const { location, units, isLoading } = this.props;
    //isLoading();
    if (location !== prevProps.location) {
      getCurrent(location, units, currentWeather => {
        this.setState({
          date: currentWeather.date,
          temp: currentWeather.temp,
          icon: currentWeather.icon,
          description: currentWeather.description
        });
      });
    }
  }

  componentDidMount() {
    console.log("MOUNT");
    console.log(this.props);
    const { location, units, isLoading, tempUnit } = this.props;
    //isLoading();
    getCurrent(location, units, currentWeather => {
      this.setState({
        date: currentWeather.date,
        temp: `${currentWeather.temp} ${tempUnit}`,
        icon: currentWeather.icon,
        description: currentWeather.description
      });
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
      <TimeCard
        temp={temp}
        iconSrc={iconSrc}
        time="Currently"
      />
      </div>
    );
  }
}

export default CurrentWeather;
