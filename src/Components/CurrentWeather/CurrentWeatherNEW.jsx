import React from "react";
import getCurrent from "../../api/currentWeatherAPI";
//import { Card, CardBody, CardTitle } from "reactstrap";
import { TimeCard } from "../TimeCard/TimeCard";
import styles from "./CurrentWeatherNEW.module.scss";

class CurrentWeatherNEW extends React.Component {
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
    const { location, units } = this.props;
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
    const { location, units } = this.props;
    getCurrent(location, units, currentWeather => {
      this.setState({
        date: currentWeather.date,
        temp: currentWeather.temp,
        icon: currentWeather.icon,
        description: currentWeather.description
      });
    });
  }

  render() {
    const { icon, temp, description } = this.state;
    const { tempUnit } = this.props;
    if (!icon) {
      return <div>Loading...</div>;
    }
    const iconSrc = require(`../../common/icons/${icon}.svg`);
    return <TimeCard temp={temp} tempUnit={tempUnit} iconSrc={iconSrc} time="Currently" />;
  }
}

export default CurrentWeatherNEW;
