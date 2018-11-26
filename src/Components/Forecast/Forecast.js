import React from 'react';
import moment from 'moment';
import getForecast from './Forecast-API'

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }

        this.getForecast = getForecast.bind(this);
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.location !== prevProps.location) {
            getForecast(this.props.location, this.props.units, (newData) => {
                this.setState({
                    array: newData
                })
            });
        }
    }

    componentDidMount = () => {
        getForecast(this.props.location, this.props.units, 
            (data) => {
                this.setState({
                    array: data
                })
            })
    }

    render() {
        //Use a table for this instead
        return this.state.array.map((day) => {
            return (
                <div className="Forecast-Wrapper">
                    <div className="Forecast-Date">{moment(day.date, "YYYY-MM-DD").format("ddd MMM D")}</div>
                    {day.times.map((time) => {
                        return (
                            <div className="Forecast-Detail">
                                <ul>
                                    <li>{time.time}</li>
                                    <li><img src={time.icon} /></li>
                                    <li>{time.temp + ' ' + this.props.tempUnit}</li>
                                    <li>{time.description}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }
}


export default Forecast; 