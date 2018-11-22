import React from 'react';
import './Card.css';


let APIkey = 'aadd2eb63b5dece08ab06ef70507cc13';

//Forecast example: http://api.openweathermap.org/data/2.5/forecast?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial
//Current weather: http://api.openweathermap.org/data/2.5/weather?zip=06831,us&APPID=aadd2eb63b5dece08ab06ef70507cc13&units=imperial 



//!!!!!!!!!!!!!!!!!!! THIS SHOULD BE A STATELESS COMPONENT!!!!! 


const Card2 = ({ ...props }) => {

    const propData = props;
    console.log("Card2 Props");
    console.log(propData);

    return (
        <div className="Card-Wrapper">
            <div>{props.date}</div>
            <img src={props.icon} />
            <div>{props.description}</div>
            <div>{props.temp}</div>
        </div>
    )
}


export default Card2;

