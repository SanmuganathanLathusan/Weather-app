import WeatherIcon from './WeatherIcon'
import './WeatherDisplay.css'

function WeatherDisplay({ data }) {
  return (
    <div className="weather show">
      <WeatherIcon icon={data.icon} />
      <h1 className="temp">{data.temp}°C</h1>
      <h2 className="city">{data.city}, {data.country}</h2>
      <p className="description">{data.description}</p>
      <div className="details">
        <div className="col">
          <img src="/images/humidity.svg" alt="Humidity" />
          <div>
            <p className="humidity">{data.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="/images/wind.svg" alt="Wind Speed" />
          <div>
            <p className="wind">{data.wind}km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay
