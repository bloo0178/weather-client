import React from 'react';

class Location extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleClick = () => {
        this.props.getLocation(this.state.location);
    }

    render() {
        return (
            <div>
                <input placeholder="Enter a location" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }

}

export default Location; 