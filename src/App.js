import React from 'react';
import CityComponent from './Components/CityComponent/CityComponent';
import WeatherComponent from './Components/WeatherComponent/WeatherComponent';
import axios from 'axios';
import { useState } from 'react';
import { apiKeys } from './apiKeys';

function App() {
  const [city, updateCity] = useState('');
  const [weather, updateWeather] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    await axios
      .get(`${apiKeys.base}weather?q=${city}&units=metric&APPID=${apiKeys.key}`)
      .then((response) => {
        updateWeather(response.data);
        setQuery('');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        updateWeather('');
        setQuery('');
        setError({ message: 'Not Found', query: query });
      });
  };
  return (
    <div className='App'>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <>
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
          <li id='error'>
            {error.query} {error.message}
          </li>
        </>
      )}
    </div>
  );
}
export default App;
