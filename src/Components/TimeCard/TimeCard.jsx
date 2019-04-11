import React from "react";
import styles from './TimeCard.module.css';

export function TimeCard(props) {
  const { temp, iconSrc, time, tempUnit } = props;
  return (
    <div className={styles.Container}>
      <div>{temp} {tempUnit}</div>
      <div>
        <img src={iconSrc} alt="Current weather icon" />
      </div>
      <div>{time}</div>
    </div>
  );
}
