import React from 'react';
import { Sun, CloudRain, Cloud, Wind, Droplet } from 'lucide-react';

export default function CurrentWeather({ weather }) {
  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun className="w-16 h-16 text-yellow-400" />;
    if (code >= 1 && code <= 3)
      return <Cloud className="w-16 h-16 text-gray-400" />;
    if (code >= 51 && code <= 67)
      return <CloudRain className="w-16 h-16 text-blue-400" />;
    return <Cloud className="w-16 h-16 text-gray-400" />;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{weather.city}</h2>
          <p className="text-xl">{weather.description}</p>
        </div>
        <div className="flex items-center">
          {getWeatherIcon(weather.code)}
          <p className="text-4xl font-bold ml-4">
            {Math.round(weather.temperature)}°C
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center">
          <Wind className="w-6 h-6 mr-2 text-gray-500" />
          <span>Wind: {weather.windSpeed} m/s</span>
        </div>
        <div className="flex items-center">
          <Droplet className="w-6 h-6 mr-2 text-blue-500" />
          <span>Humidity: {weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
