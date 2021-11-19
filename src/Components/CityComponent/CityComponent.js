import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from '../Header/Header';
import './CityComponent.css';

function CityComponent(props) {
  const { updateCity, fetchWeather } = props;
  return (
    <Fragment>
      <Header />
      <div className='box'>
        <form onSubmit={fetchWeather}>
          <input
            className='input'
            aria-label='location'
            type='text'
            placeholder='Search for location'
            onChange={(e) => updateCity(e.target.value)}
            required
          />

          <button type='submit' className='button' onSubmit={fetchWeather}>
            SEARCH
          </button>
        </form>
      </div>
    </Fragment>
  );
}
export default CityComponent;
