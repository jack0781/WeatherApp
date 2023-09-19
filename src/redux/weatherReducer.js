import { SET_WEATHER_DATA, SET_LOCATION, SET_ERROR } from './WeatherActions';

export const initialState = {
  data: {},
  location: '',
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, data: action.payload };
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
