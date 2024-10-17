import React from 'react';
import { WeatherCardProps } from '../types/PropsTypes';
const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
