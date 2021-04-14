import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/phoneBook/phoneBook-reducer';
import store from './redux/store';
import { phoneBookActions } from './redux/phoneBook/phoneBook-actions';
import { Provider } from 'react-redux';

console.log(store);
console.log(store.getState());

// store.dispatch(phoneBookActions);
// store.dispatch(myAction(10));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
