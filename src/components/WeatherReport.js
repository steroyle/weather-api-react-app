import React from 'react'
import WeatherCard from './WeatherCard'
import './WeatherReport.css'
import Map from './Map'

const WeatherReport = ({weatherData}) => {
  const currentTime = new Date(weatherData.location.localtime)

  return (

    <div className="weather-report">

      <div className="forecast">
        <div className="location-info">
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.location.region}</p>
          <p>{weatherData.location.country}</p>
          <p>Local Time: {currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>
        {
          weatherData.forecast.forecastday.map((forecast, i) => (
            <WeatherCard forecast={forecast} key={i}/>
          ))
        }
      </div>
      <Map lat={weatherData.location.lat} lon={weatherData.location.lon} />
    </div>

  )
}

export default WeatherReport