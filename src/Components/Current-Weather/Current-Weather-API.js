import axios from 'axios';
import moment from 'moment';

let APIkey = process.env.REACT_APP_WEATHER_API_KEY;

const getCurrent = (locationString, units, cb) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?` +
            `${locationString}&APPID=${APIkey}&units=${units}`)
            .then(res => {
                console.log(res.data);
                let currentWeather = {
                    date: moment.unix(res.data.dt).format('ddd MMM D'),
                    temp: res.data.main.temp,
                    icon: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
                    description: res.data.weather[0].main
                }
                cb(currentWeather);
            })
            .catch(err => {
                cb(err);
            })

}

export default getCurrent; 