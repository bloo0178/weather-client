import axios from 'axios';
import moment from 'moment';

let APIkey = process.env.REACT_APP_WEATHER_API_KEY;

const getForecast = (locationString, units, cb) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?` +
        `${locationString}&APPID=${APIkey}&units=${units}&cnt=50`)
        // ^^^ This will return a max of 40 objects with the free API. Cuts off the final data point on the last day.
        .then(res => {
            const data = (res.data.list);
            //dateRange is used as the baseline to ensure displayed forecast doesn't exceed a 5-day window.
            var minDate = moment().format("YYYY-MM-DD");
            var maxDate = moment().add(4, 'days').format("YYYY-MM-DD");

            var newData = [];

            data.forEach((elem) => {
                let elemDate = moment(elem.dt_txt, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
                let elemTime = moment(elem.dt_txt, "YYYY-MM-DD HH:mm:ss").format("ha");
                //Only show forecast for 5 days after today. This checks dataset to see if value is today or earlier.
                //if (moment(elemDate).isSameOrBefore(minDate)) return;
                if (moment(elemDate).isBefore(minDate)) return;
                //This checks dataset to see if value is after 5 days from now.
                if (moment(elemDate).isAfter(maxDate)) return;
                let temp = {
                    date: elemDate,
                    times: [{
                        time: elemTime,
                        temp: elem.main.temp,
                        description: elem.weather[0].main,
                        icon: `http://openweathermap.org/img/w/${elem.weather[0].icon}.png` //not using currently
                    }]
                }
                if (!newData.some(x => x.date === elemDate)) {
                    newData.push(temp);
                } else {
                    for (let i = 0; i < newData.length; i++) {
                        if (newData[i].date === elemDate) {
                            newData[i].times.push(temp.times[0]);
                            i += newData.length;
                        }
                    }
                }
            })
            cb(newData);
        })
        .catch(err => {
            cb("caught error");
        })
}

export default getForecast;