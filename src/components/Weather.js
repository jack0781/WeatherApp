import React from 'react';
import { connect } from 'react-redux';
import { setWeatherData, setLocation, setError } from '../redux/WeatherActions';
import axios from 'axios';


const Weather = (props) => {
    const { data, location, error, setWeatherData, setLocation, setError } = props;

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
  
    const fetchWeatherData = () => {
        axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
          setLocation('');
          setError(null);
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response.data.message);
            setWeatherData({});
            console.error('Error response from server:', error.response.data);
          } else if (error.request) {
            console.error('No response received from server. Network error:', error.request);
          } else {
            console.error('An error occurred:', error.message);
          }
        });
      };
  
    return (
      <>
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter Location'
            type="text" />
            <button onClick={fetchWeatherData}>Get Weather</button>
        </div>
        <div className="container">
          <div className="top">
          {error && <p>{error}</p>}
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
  
          {data.name !== undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }
        </div>
      </>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
    location: state.location,
    error: state.error,
  });
  
  export default connect(mapStateToProps, {
    setWeatherData,
    setLocation,
    setError,
  })(Weather);
