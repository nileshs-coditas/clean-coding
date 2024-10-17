export interface CurrentWeather {
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
  }
  
  export interface WeatherForecast {
    date: string;
    temperature: number;
    description: string;
  }
  
  export interface WeatherResponse {
    current: CurrentWeather;
    forecast: WeatherForecast[];
  }
  