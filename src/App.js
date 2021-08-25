import { useEffect, useState, useRef } from 'react'
import './App.css';
import WeatherReport from './components/WeatherReport'
import Header from './components/Header'

function App() {

  const [weatherData, setWeatherData] = useState()
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const getWeather = async () => {
      const response = await fetch(`/.netlify/functions/weather-api?q=${query}&days=3`)
      const data = await response.json()
      setWeatherData(data)
      setSearch('')
    }
    getWeather()
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <h3>Enter your location</h3>
          <input
            name="search"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        { weatherData ? <WeatherReport weatherData={weatherData} /> : null }
      </div>
    </div>
  );
}

export default App;
