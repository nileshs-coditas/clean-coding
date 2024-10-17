import axios from 'axios';
import { WeatherResponse } from '../types/WeatherTypes';
import { API_KEY, BASE_URL } from '../constants/weatherApiConstants';
export const fetchWeather = async (location: string): Promise<WeatherResponse> => {
  const response = await axios.get(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`);
  const currentWeather = {
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
  };


  const forecastResponse = await axios.get(`${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`);
  const forecast = forecastResponse.data.list.slice(0, 5).map((item: any) => ({
    date: item.dt_txt.split(' ')[0],
    temperature: item.main.temp,
    description: item.weather[0].description,
  }));

  return { current: currentWeather, forecast };
};
