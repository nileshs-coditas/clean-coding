import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecast';
import { useWeather } from './hooks/useWeather';

const App: React.FC = () => {
  const [location, setLocation] = useState('');
  const { weatherData, error } = useWeather(location);

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <LocationInput onSubmit={setLocation} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <>
          <WeatherCard weather={weatherData.current} />
          <WeatherForecast forecast={weatherData.forecast} />
        </>
      )}
    </div>
  );
};

export default App;
