import React from 'react';
import { Collapse, Button, Table } from 'reactstrap';
import styles from './ForecastDayCard.module.scss';

class ForecastDayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <div className={styles.forecastWrapper}>
                <thead >
                    <tr >
                        <th className={styles.forecastDate} >{this.props.date}</th>
                    </tr>
                </thead>
                <Collapse isOpen={!this.state.collapse}>
                    <Table striped size="sm" className={styles.forecastDetail}>
                        <tbody >
                            {this.props.times.map((time) => {
                                return (
                                    <tr>
                                        <td className="w-25 align-middle">{time.time}</td>
                                        <td className="w-25 align-middle"><img src={time.icon} /></td>
                                        <td className="w-25 align-middle">{time.temp + ' ' + this.props.tempUnit}</td>
                                        <td className="w-25 align-middle">{time.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </ Table>
                </Collapse>
            </div>
        )
    }


}

export default ForecastDayCard;

