import React from "react";
import moment from "moment";
import getForecast from "../../api/forecastAPI";
import ForecastDayCard from "./ForecastDayCard/ForecastDayCard";
import styles from "./Forecast.module.css";
import SwipeableViews from "react-swipeable-views";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidUpdate = async prevProps => {
    const { location, units } = this.props;
    if (location !== prevProps.location) {
      const forecastData = await getForecast(location, units);
      this.setState({
        array: forecastData
      });
    }
  };

  componentDidMount = async () => {
    const { location, units } = this.props;
    const forecastData = await getForecast(location, units);
    this.setState({
      array: forecastData
    });
  };

  render() {
    return (
      <div className={styles.Container}>
        <SwipeableViews enableMouseEvents>
          {this.state.array.map(day => {
            return (
              <div className={styles.Cards} key={day.date}>
                <ForecastDayCard
                  date={moment(day.date, "YYYY-MM-DD").format("ddd MMM D")}
                  times={day.times}
                  tempUnit={this.props.tempUnit}
                />
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );
  }
}

export default Forecast;
