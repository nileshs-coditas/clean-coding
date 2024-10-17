import React from 'react';
import { WeatherForecastProps } from '../types/PropsTypes';
const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      {forecast.map((day) => (
        <div key={day.date}>
          <p>{day.date}: {day.temperature}°C, {day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
