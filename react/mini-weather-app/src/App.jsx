import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import Weather from './components/Weather'

const API_KEY = '89d717134cmsh4f1154ea8a49c28p1487f1jsn1c74fec48e30'

function App() {

  console.log("app renders")

  const [place, setPlace] = useState("")
  const [weather, setWeather] = useState({})
  const [status, setStatus] = useState(0) // 0 -> isn't started yet, 1 -> successfull, 2 -> unsuccessfull, 3 -> pending 

  useEffect(() => {
    console.log("useeffect called")
    if (status == 1) {
      setPlace("")
    }
  }, [status])

  async function fetchWeather(placeToSearch) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${placeToSearch}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();

      // @ts-ignore
      try {
        const { location: { tz_id, region, country, localtime }, current: { temp_c, condition: { text, icon }, wind_mph, precip_in, humidity, wind_dir } } = JSON.parse(result)
        const weatherdata = { tz_id, region, country, localtime, temp_c, text, icon, wind_mph, precip_in, humidity, wind_dir }
        setWeather(weatherdata)

        setStatus(1)
        return
      }
      catch (error) {
        console.log(result, placeToSearch)
        setStatus(2)
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  function setWeatherData() {
    console.log(status)
    if (status == 0) {
      return <h3>Please enter the place to fetch weather data</h3>
    }
    if (status == 1) {
      // @ts-ignore
      return <Weather {...weather}></Weather>
    }
    if (status == 2) {
      return <h3>No matching location found.</h3>
    }
    return <img src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif" alt="Loading..." width={50} style={{
      margin: 10
    }} />
  }

  return (
    <>
      <div>
        <center>
          <div>
            <input type="text" name="place" id="place" placeholder="Enter place" value={place} onChange={(e) => {
              setPlace(e.target.value)
            }} /><br /><br />
            <button onClick={() => {
              setStatus(3)
              fetchWeather(place)
            }}>GET WEATHER</button>
          </div>
          <div>

            {setWeatherData()}

          </div>
        </center>
      </div>
    </>
  )
}

export default App
