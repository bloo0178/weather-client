import React from 'react';
import axios from 'axios';
import moment from 'moment';


let APIkey = 'aadd2eb63b5dece08ab06ef70507cc13';

//Forecast example: http://api.openweathermap.org/data/2.5/forecast?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial&cnt=5

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?` +
            `${this.props.location}&APPID=${APIkey}&units=${this.props.units}&cnt=50`)
            // ^^^ This will return a max of 40 objects with the free API. Cuts off the final data point on the last day.
            .then(res => {
                const data = (res.data.list);

                console.clear();
                console.log(data);
                //dateRange is used as the baseline to ensure displayed forecast doesn't exceed a 5-day window.
                var minDate = moment().format("YYYY-MM-DD");
                var maxDate = moment().add(5, 'days').format("YYYY-MM-DD");

                var newData = [];

                data.forEach((elem) => {
                    let elemDate = moment(elem.dt_txt, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
                    let elemTime = moment(elem.dt_txt, "YYYY-MM-DD HH:mm:ss").format("ha");
                    //Only show forecast for 5 days after today. This checks dataset to see if value is today or earlier.
                    if (moment(elemDate).isSameOrBefore(minDate)) return;
                    //This checks dataset to see if value is after 5 days from now.
                    if (moment(elemDate).isAfter(maxDate)) return; 
                    let temp = {
                        date: elemDate,
                        times: [{
                            time: elemTime,
                            temp: elem.main.temp,
                            description: elem.weather[0].main, 
                            icon: elem.weather[0].icon //not using currently
                        }]
                    }
                    if (!newData.some(x => x.date === elemDate)) {
                        newData.push(temp);
                    } else { 
                        for (let i = 0; i < newData.length; i++) { 
                            if (newData[i].date === elemDate) {
                                newData[i].times.push(temp.times[0]);
                                i+=newData.length;
                            }
                        }
                    }
                })
                this.setState({
                    array: newData
                })
            })
            .catch(err => {
                this.setState({ temp: "error" })
            })
    }

    render() {

        return this.state.array.map((day) => {
            return (
                <div className="Card-Wrapper">
                    <div>{moment(day.date, "YYYY-MM-DD").format("ddd MMM D")}</div>
                    {day.times.map((time) => {
                        return (
                            <div>{time.time + ": " +
                                time.temp + this.props.tempUnit +
                                " " + time.description}
                            </div>
                        )
                    })}
                </div>
            )
        })
    }
}


export default Forecast; 