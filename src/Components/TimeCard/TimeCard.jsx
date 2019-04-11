import React from "react";

export function TimeCard(props) {
  const { temp, iconSrc, time, tempUnit } = props;
  return (
    <div>
      <div>{temp} {tempUnit}</div>
      <div>
        <img src={iconSrc} alt="Current weather icon" />
      </div>
      <div>{time}</div>
    </div>
  );
}
