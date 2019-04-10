import React from "react";
import getCurrent from "../../api/currentWeatherAPI";
import { Card, CardBody, CardTitle } from "reactstrap";
import styles from "./CurrentWeather.module.scss";

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
    return (
      <div className={styles.cardWrapper}>
        <Card className="border-0">
          <CardBody className="text-center">
            <CardTitle>Currently</CardTitle>
            <img src={iconSrc} alt="Current weather icon" />
            <div>{temp + " " + tempUnit}</div>
            <div>{description}</div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CurrentWeather;
