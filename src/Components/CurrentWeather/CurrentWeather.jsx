import React from 'react';
import getCurrent from '../../api/currentWeatherAPI';
import { Card, CardBody, CardTitle } from 'reactstrap';
import styles from './CurrentWeather.module.scss';

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            temp: '',
            icon: '',
            description: '',
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.location !== prevProps.location) {
            getCurrent(this.props.location, this.props.units, (currentWeather) => {
                this.setState({
                    date: currentWeather.date,
                    temp: currentWeather.temp,
                    icon: currentWeather.icon,
                    description: currentWeather.description
                })
            });
        }
    }

    componentDidMount() {
        getCurrent(this.props.location, this.props.units,
            (currentWeather) => {
                this.setState({
                    date: currentWeather.date,
                    temp: currentWeather.temp,
                    icon: currentWeather.icon,
                    description: currentWeather.description
                })

            })
    }

    render() {
        return (
            <div className={styles.cardWrapper}>
                <Card className="border-0">
                    <CardBody className="text-center">
                        <CardTitle>Currently</CardTitle>
                        {/*<div>{this.state.date}</div>*/}
                        <img src={this.state.icon} alt="Current weather icon" />
                        <div>{this.state.temp + ' ' + this.props.tempUnit}</div>
                        <div>{this.state.description}</div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CurrentWeather; 