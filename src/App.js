import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState(''); // Default city
  const [weather, setWeather] = useState(null);

  const handleSearch = (searchCity) => setCity(searchCity);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="max-w-lg w-full space-y-6 p-6 rounded-lg shadow-xl bg-white/70 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 tracking-tight drop-shadow-md">
          Weather Now
        </h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard city={city} weather={weather} setWeather={setWeather} />
      </div>
    </div>
  );
}

export default App;
