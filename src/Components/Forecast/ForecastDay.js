import React from 'react';
import { Collapse, Button, Table } from 'reactstrap';

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
                <span className="Forecast-Date">
                    {this.props.date}
                    <Button color="secondary" size="sm" onClick={this.toggle}>toggle</Button>
                </span>
                <Collapse isOpen={!this.state.collapse}>
                <Table striped size="sm" >
                    <tbody >
                    {this.props.times.map((time) => {
                        return (
                            <tr >
                                <td className="align-middle">{time.time}</td>
                                <td className="align-middle"><img src={time.icon} /></td>
                                <td className="align-middle">{time.temp + ' ' + this.props.tempUnit}</td>
                                <td className="align-middle">{time.description}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </ Table>
                </Collapse>
            </div>
        )
    }


}

export default ForecastDay;

