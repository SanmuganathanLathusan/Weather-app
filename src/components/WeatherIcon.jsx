function WeatherIcon({ icon }) {
  const getIconPath = (description) => {
    const desc = description.toLowerCase()
    
    if (desc.includes('cloud')) return '/images/clouds.png'
    if (desc.includes('clear') || desc.includes('sunny')) return '/images/clear.png'
    if (desc.includes('rain') || desc.includes('drizzle')) return '/images/rain.png'
    if (desc.includes('mist') || desc.includes('smoke') || desc.includes('fog') || desc.includes('dust') || desc.includes('sand') || desc.includes('ash')) return '/images/mist.png'
    if (desc.includes('snow')) return '/images/snow.png'
    if (desc.includes('thunderstorm')) return '/images/thunderstorm.png'
    
    return '/images/clear.png' // default
  }

  const iconPath = getIconPath(icon)

  return (
    <img src={iconPath} alt={icon} className="weather-icon" />
  )
}

export default WeatherIcon
