import React from "react";
import { Collapse, Table } from "reactstrap";
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
        {/*<Collapse isOpen={!this.state.collapse}>*/}
        <Table striped size="sm" className={styles.forecastDetail}>
          <tbody>
            {times.map(time => {
              return (
                <tr key={time.time}>
                  <td className="w-25 align-middle">{time.time}</td>
                  <td className="w-25 align-middle">
                    <img src={time.icon} alt={"weather icon"} />
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
        {/*</Collapse>*/}
      </div>
    );
  }
}

export default ForecastDayCard;
