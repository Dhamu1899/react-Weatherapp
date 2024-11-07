import { useState, useCallback } from 'react';

export function useWeather(city, setWeather) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error('City not found');

      const { latitude, longitude } = geoData.results[0];
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`
      );
      const weatherData = await weatherResponse.json();

      setWeather({
        city,
        temperature: weatherData.current_weather.temperature,
        description: 'Weather description here', // Replace with actual description if available
        code: weatherData.current_weather.weathercode,
        windSpeed: weatherData.current_weather.windspeed,
        humidity: weatherData.hourly.relativehumidity_2m[0],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [city, setWeather]);

  return { fetchWeather, loading, error };
}
