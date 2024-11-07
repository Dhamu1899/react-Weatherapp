import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState('New York'); // Default city
  const [weather, setWeather] = useState(null);

  const handleSearch = (searchCity) => setCity(searchCity);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="max-w-lg w-full space-y-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">Weather Now</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard city={city} weather={weather} setWeather={setWeather} />
      </div>
    </div>
  );
}

export default App;
