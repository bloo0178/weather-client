import React from 'react';
import axios from 'axios';

let APIkey = 'aadd2eb63b5dece08ab06ef70507cc13';

//Current weather: http://api.openweathermap.org/data/2.5/weather?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial 

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Current = (Card) => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                date: '',
                temp: 'L/H temp',
                precipitation: 'precip',
                icon: '',
                description: '',
            }
        }


        componentDidMount() {
            console.log("Current Props");
            console.log(this.props);
            axios.get(`http://api.openweathermap.org/data/2.5/weather?` +
                `${this.props.location}&APPID=${APIkey}&units=${this.props.units}`)
                .then(res => {
                    console.log('raw data');
                    console.log(res.data.clouds);
                    this.setState({ 
                        date: days[new Date(res.data.dt * 1000).getDay()],
                        temp: res.data.main.temp + ' ' + this.props.tempUnit,
                        icon: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
                        description: res.data.weather[0].description
                    })
                })
                .catch(err => {
                    this.setState({ temp: "error" })
                })
        }

        render() {
            return (
                <Card
                    date={this.state.date}
                    temp={this.state.temp}
                    icon={this.state.icon}
                    description={this.state.description}
                    {...this.props}
                />
            )
        }
    }
}

export default Current; 