import { useState, useCallback } from 'react';

export function useWeather(city, setWeather) {
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error messages

  // Fetch weather data for the given city
  const fetchWeather = useCallback(async () => {
    if (!city) return; // Exit if no city is provided
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      // Step 1: Get coordinates of the city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoResponse.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found'); // Show error if no city data
      }

      const { latitude, longitude } = geoData.results[0]; // Get city coordinates

      // Step 2: Use coordinates to get weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`
      );
      const weatherData = await weatherResponse.json();

      // Step 3: Update weather state with the fetched data
      setWeather({
        city,
        temperature: weatherData.current_weather.temperature,
        description: 'Sunny', // Replace this with actual data if available
        code: weatherData.current_weather.weathercode,
        windSpeed: weatherData.current_weather.windspeed,
        humidity: weatherData.hourly.relativehumidity_2m[0],
      });
    } catch (err) {
      setError(err.message); // Set error message if there's an issue
    } finally {
      setLoading(false); // Stop loading
    }
  }, [city, setWeather]);

  // Return the fetch function, loading state, and error for easy access
  return { fetchWeather, loading, error };
}
