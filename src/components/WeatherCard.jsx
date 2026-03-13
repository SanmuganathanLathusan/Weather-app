import { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'
import ErrorMessage from './ErrorMessage'
import './WeatherCard.css'

function WeatherCard({ onSearch, weatherData, error, loading }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term)
    onSearch(term)
  }

  return (
    <div className="card">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {weatherData && <WeatherDisplay data={weatherData} />}
      {!weatherData && !error && (
        <div className="placeholder">
          <p>Search for a city to see weather information</p>
        </div>
      )}
    </div>
  )
}

export default WeatherCard
