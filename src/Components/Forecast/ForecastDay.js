import React from 'react';
import { Collapse, Button } from 'reactstrap';
import moment from 'moment';


class ForecastDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <div className="Forecast-Wrapper">
                <div className="Forecast-Date">
                    {this.props.date}
                </div>
                <Button color="secondary" size="sm" onClick={this.toggle}>toggle</Button>
                <Collapse isOpen={!this.state.collapse}>
                    {this.props.times.map((time) => {
                        return (
                            //Use a table for this instead
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

                </Collapse>
            </div>
        )
    }


}

export default ForecastDay;

