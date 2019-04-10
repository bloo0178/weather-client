import React from "react";
import { Table } from "reactstrap";
import styles from "./ForecastDayCard.module.scss";

class ForecastDayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
      const { date, tempUnit, times} = this.props;
    return (
      <div className={styles.forecastWrapper}>
        <h4 className={styles.forecastDate}>{date}</h4>
        <Table striped size="sm" className={styles.forecastDetail}>
          <tbody>
            {times.map(time => {
              let regex = /(.{3})(?=(\.png))/; 
              let icon = regex.exec(time.icon)[0];
              const iconSrc = require(`../../../common/icons/${icon}.svg`);
              return (
                <tr key={time.time}>
                  <td className="w-25 align-middle">{time.time}</td>
                  <td className="w-25 align-middle">
                    <img src={iconSrc} alt={`${time.time} weather icon`} />
                  </td>
                  <td className="w-25 align-middle">
                    {time.temp + " " + tempUnit}
                  </td>
                  <td className="w-25 align-middle">{time.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ForecastDayCard;
