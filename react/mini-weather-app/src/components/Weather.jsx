import React from "react";

function Weather({ tz_id, region, country, localtime, temp_c, text, icon, wind_mph, precip_in, humidity, wind_dir }) {

    console.log("weather renders")

    const weatherStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '400px',
        textAlign: 'left',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
    };

    const iconStyle = {
        width: '40px',
        height: '40px',
        marginLeft: '10px',
    };

    return (
        <div
            // @ts-ignore
            style={weatherStyle}>
            <p><strong>TimeZone:</strong> {tz_id}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>Localtime:</strong> {localtime}</p>
            <p><strong>Temperature:</strong> {temp_c}° C</p>
            <p><strong>Description:</strong> {text} <img src={icon} alt={text} style={iconStyle} /></p>
            <p><strong>Wind in MPH:</strong> {wind_mph}</p>
            <p><strong>Precipitation:</strong> {precip_in}</p>
            <p><strong>Humidity:</strong> {humidity}</p>
            <p><strong>Wind direction:</strong> {wind_dir}</p>
        </div>
    );
}

export default Weather;
