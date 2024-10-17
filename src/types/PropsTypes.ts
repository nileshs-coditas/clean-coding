import { CurrentWeather } from "./WeatherTypes";
import { WeatherForecast } from "./WeatherTypes";
export interface WeatherCardProps {
  weather: CurrentWeather;
}

export interface LocationInputProps {
  onSubmit: (location: string) => void;
}

export interface WeatherForecastProps {
    forecast: WeatherForecast[]; 
  }