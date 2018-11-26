import axios from 'axios';
import moment from 'moment';

let APIkey = 'aadd2eb63b5dece08ab06ef70507cc13';

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getCurrent = (locationString, units, cb) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?` +
            `${locationString}&APPID=${APIkey}&units=${units}`)
            .then(res => {
                console.log('raw data');
                console.log(res.data);
                let currentWeather = {
                    date: days[new Date(res.data.dt * 1000).getDay()],
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