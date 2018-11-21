import React from 'react';
import './DayCard.css';
import axios from 'axios';

let APIkey = 'aadd2eb63b5dece08ab06ef70507cc13'; 

//Forecast example: http://api.openweathermap.org/data/2.5/forecast?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial
//Current weather: http://api.openweathermap.org/data/2.5/weather?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial 

class DayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'day/date',
            temp: 'low/high temp',
            precipitation: 'precip',
            data: '',
            units: 'imperial',
            tempUnit: 'F',
            type: 'weather'//current (weather) or forecast
        }
    }



    //https://github.com/axios/axios
    //How to store previous request???
    componentDidMount() {
       // axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + APIkey)
        axios.get(`http://api.openweathermap.org/data/2.5/${this.state.type}?zip=06831,us&APPID=${APIkey}&units=${this.state.units}`)
        .then(res => {
            console.log(res.data.main.temp);
            //const data = res.data.list[0].main.temp;
            const data = res.data.main.temp + ' ' + this.state.tempUnit;
            this.setState({ data: data })
        })
        .catch(err => {
            const data = "error";
            this.setState({ data: data })
        })
    }

    render() {
        return (
            <div className="Day-Card-Wrapper">
                <div>DAYCARD</div>
                <div>{this.props.location}</div>
                <div>{this.state.date}</div>
                {/*Use this for icons: https://openweathermap.org/weather-conditions
                https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/*/}
                <div>ICON</div>
                <div>{this.state.temp}</div>
                <div>{this.state.precipitation}</div>
                <div>AXIOS TEST: {this.state.data}</div>
            </div>
        )
    }
}

export default DayCard; 