import React from "react";
import { TimeCard } from "../TimeCard/TimeCard";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = props => {
  const { icon, temp } = props.currentWeather;

  const iconSrc = require(`../../common/icons/${icon}.svg`);
  return (
    <div className={styles.Container}>
      <TimeCard temp={temp} iconSrc={iconSrc} time="Currently" />
    </div>
  );
};

export default CurrentWeather;
