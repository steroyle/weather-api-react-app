import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({forecast}) => {


  function getOrdinal(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}
  const date = new Date(forecast.date)

  return (
    <div className="card">
      <img className="card__img" src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
      <div className="card__content">
        <p className="date">{`${date.getDate()}${getOrdinal(date.getDate())} ${date.toLocaleString('default', { month: 'long' })}`}</p>
        <p className="description">{forecast.day.condition.text}</p>
        <p>{forecast.day.avgtemp_c}&deg;C</p>
      </div>
    </div>
  )
}

export default WeatherCard