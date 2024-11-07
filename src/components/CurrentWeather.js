import React from 'react';
import { Sun, CloudRain, Cloud, Wind, Droplet } from 'lucide-react';

export default function CurrentWeather({ weather }) {
  // Function to get the appropriate weather icon based on the weather code
  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun className="icon text-yellow-400 animate-spin-slow" />;
    if (code >= 1 && code <= 3) return <Cloud className="icon text-gray-400" />;
    if (code >= 51 && code <= 67) return <CloudRain className="icon text-blue-400" />;
    return <Cloud className="icon text-gray-400" />; // Default icon
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-2xl border border-blue-200 backdrop-blur-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
      {/* Main weather display */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight">{weather.city}</h2>
          <p className="text-lg font-medium text-blue-500">{weather.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getWeatherIcon(weather.code)}
          <p className="temperature text-5xl font-bold text-blue-700 animate-pulse">{Math.round(weather.temperature)}°C</p>
        </div>
      </div>
      
      {/* Additional weather info */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-2">
          <Wind className="icon-small text-gray-500" />
          <span className="text-blue-600 font-semibold">Wind: {weather.windSpeed} m/s</span>
        </div>
        <div className="flex items-center space-x-2">
          <Droplet className="icon-small text-blue-500" />
          <span className="text-blue-600 font-semibold">Humidity: {weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
