function WeatherIcon({ icon }) {
  const getIconPath = (description) => {
    const desc = description.toLowerCase()
    
    if (desc.includes('cloud')) return '/images/clouds.svg'
    if (desc.includes('clear') || desc.includes('sunny')) return '/images/clear.svg'
    if (desc.includes('rain') || desc.includes('drizzle')) return '/images/rain.svg'
    if (desc.includes('mist') || desc.includes('smoke') || desc.includes('fog') || desc.includes('dust') || desc.includes('sand') || desc.includes('ash')) return '/images/mist.svg'
    if (desc.includes('snow')) return '/images/snow.svg'
    if (desc.includes('thunderstorm')) return '/images/thunderstorm.svg'
    
    return '/images/clear.svg' // default
  }

  const iconPath = getIconPath(icon)

  return (
    <img src={iconPath} alt={icon} className="weather-icon" />
  )
}

export default WeatherIcon
