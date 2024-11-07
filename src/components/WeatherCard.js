import React, { useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import { useWeather } from '../hooks/useWeather';

export default function WeatherCard({ city, weather, setWeather }) {
  const { fetchWeather, loading, error } = useWeather(city, setWeather);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]);

  if (loading) return <p className="text-center text-blue-600 mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

  return (
    weather && <CurrentWeather weather={weather} />
  );
}
