import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl = import.meta.env.VITE_API_URL

  const checkWeather = async (city) => {
    if (!city.trim()) {
      setError(true)
      return
    }

    setLoading(true)
    setError(false)

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
      
      if (!response.ok) {
        setError(true)
        setWeatherData(null)
        setLoading(false)
        return
      }

      const data = await response.json()
      
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].main
      })
      setError(false)
    } catch (err) {
      setError(true)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchTerm) => {
    checkWeather(searchTerm)
  }

  return (
    <div className="container">
      <WeatherCard 
        onSearch={handleSearch}
        weatherData={weatherData}
        error={error}
        loading={loading}
      />
    </div>
  )
}

export default App
