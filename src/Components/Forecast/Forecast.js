import React from 'react';
import moment from 'moment';
import getForecast from './Forecast-API'
import ForecastDay from './ForecastDay';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [], 
        }
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
                console.log(data);
                this.setState({
                    array: data
                })
            })
    }

    render() {
        
        return this.state.array.map((day) => {
            return (
                <ForecastDay 
                    date={moment(day.date, "YYYY-MM-DD").format("ddd MMM D")}
                    times={day.times}
                    tempUnit={this.props.tempUnit}
                />
            )
        })
    }
}


export default Forecast; 