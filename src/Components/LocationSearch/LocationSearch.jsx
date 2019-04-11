import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";
import styles from "./LocationSearch.module.css";

class LocationSearchNEW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      latitude: null,
      longitude: null,
      locationName: "",
      errorMessage: "",
      isGeocoding: false
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ isGeocoding: true, address: address });
    console.log(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Success", lat, lng);
        this.setState({
          latitude: lat,
          longitude: lng,
          locationName: address,
          isGeocoding: false
        });
      })
      .catch(error => {
        console.error("Error", error);
        this.setState({ isGeocoding: false });
      });
  };

  handleClick = () => {
    const { latitude, longitude, locationName } = this.state;
    this.props.getLocation(`lat=${latitude}&lon=${longitude}`, locationName);
    this.setState({
      address: "",
      latitude: null,
      longitude: null,
      locationName: ""
    });
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className={styles.Container}>
              <div className={styles.InputAddOn}>
                <input
                {...getInputProps({
                    className: styles.InputAddOnField,
                  type:"text",
                  placeholder:"Search for a location..."
                })}
                  
                />
                <button className={styles.InputAddOnItem} onClick={this.handleClick}>
                  Submit
                </button>
              </div>
              {/*<div className="autocomplete-dropdown-container">*/}
              <div className={styles.AutocompleteDropdownContainer} >
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(LocationSearchNEW);
