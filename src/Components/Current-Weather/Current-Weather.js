import React from 'react';
import getCurrent from './Current-Weather-API';
import { Card, CardImg, CardText, CardBody, 
CardTitle, CardSubtitle } from 'reactstrap';

class Current extends React.Component {
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
            <div className="Card-Wrapper">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>Current Weather</CardTitle>
                    <div>{this.state.date}</div>
                    <img src={this.state.icon} alt="Current weather icon" />
                    <div>{this.state.temp + ' ' + this.props.tempUnit}</div>
                    <div>{this.state.description}</div>
                </CardBody>
            </Card>
            </div>
            /*<div className="Card-Wrapper">
                <div>{this.state.date}</div>
                <div>{this.state.temp + ' ' + this.props.tempUnit}</div>
                <img src={this.state.icon} />
                <div>{this.state.description}</div>
            </div>*/
        )
    }
}


export default Current; 