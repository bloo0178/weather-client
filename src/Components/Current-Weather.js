import React from 'react';
import getCurrent from './Current-Weather-API';

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
                <div>{this.state.date}</div>
                <div>{this.state.temp + ' ' + this.props.tempUnit}</div>
                <img src={this.state.icon} />
                <div>{this.state.description}</div>
            </div>
        )
    }
}


export default Current; 