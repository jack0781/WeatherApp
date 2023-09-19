export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_ERROR = 'SET_ERROR';

export const setWeatherData = (data) => ({
  type: SET_WEATHER_DATA,
  payload: data,
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
