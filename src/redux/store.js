import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import logger from 'redux-logger';

// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware);

const middleware = [...getDefaultMiddleware(), logger];

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
