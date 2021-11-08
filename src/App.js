import React from 'react';
import CityComponent from './Components/CityComponent/CityComponent';
import WeatherComponent from './Components/WeatherComponent/WeatherComponent';
import axios from 'axios';
import { useState } from 'react';

const apiKeys = {
  key: 'e902985907738b357b6a7c7a2651a108',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [city, updateCity] = useState('');
  const [weather, updateWeather] = useState();
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
