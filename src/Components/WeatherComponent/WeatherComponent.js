import './WeatherComponent.css';
import Header from '../Header/Header';

export const WeatherInfoIcons = {
  sunset: 'icons/temp.svg',
  sunrise: '/icons/temp.svg',
  humidity: '/icons/humidity.svg',
  wind: '/icons/wind.svg',
  pressure: '/icons/pressure.svg',
};
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div>
      <img src={WeatherInfoIcons[name]} />
      <ul>
        <li>{value}</li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

const dateBuilder = () => {
  let date = String(new window.Date());
  date = date.slice(0, 15);
  return `${date}`;
};

const WeatherComponent = (props) => {
  const { weather } = props;

  return (
    <>
      <Header />
      <div className='forcast-box'>
        <button
          className='resetbtn'
          onClick={() => window.location.reload(false)}
        >
          <i class='fas fa-redo fa-2x'></i>{' '}
        </button>
        <div className='card'>
          <h2>{Math.round(weather.main.temp)} C°</h2>

          <img
            className='weather-logo'
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />

          <p>{`${weather.name}, ${weather.sys.country}`}</p>
          <br />
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='container'>
          <WeatherInfoComponent name='sunrise' value='' />
          <WeatherInfoComponent
            name={'humidity'}
            value={weather?.main?.humidity}
          />
          <WeatherInfoComponent name={'wind'} value={weather.wind.speed} />
          <WeatherInfoComponent
            name={'pressure'}
            value={weather?.main?.pressure}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default WeatherComponent;