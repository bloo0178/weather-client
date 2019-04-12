import React from "react";
import moment from "moment";
import ForecastDayCard from "./ForecastDayCard/ForecastDayCard";
import styles from "./Forecast.module.css";
import SwipeableViews from "react-swipeable-views";

const Forecast = props => {
  const { forecastData, tempUnit } = props;
  return (
    <div className={styles.Container}>
      <SwipeableViews enableMouseEvents>
        {forecastData.map(day => {
          return (
            <div className={styles.Cards} key={day.date}>
              <ForecastDayCard
                date={moment(day.date, "YYYY-MM-DD").format("ddd MMM D")}
                times={day.times}
                tempUnit={tempUnit}
              />
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
};

export default Forecast;
