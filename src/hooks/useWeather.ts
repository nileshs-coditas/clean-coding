import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherService';
import { WeatherResponse } from '../types/WeatherTypes';

export const useWeather = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(location);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Unable to fetch weather data. Please check the location or try again later.');
        setWeatherData(null);
      }
    };

    if (location) {
      getWeather();
    }
  }, [location]);

  return { weatherData, error };
};
