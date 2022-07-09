import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import Favicon from 'react-favicon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Favicon url="https://img.icons8.com/arcade/64/000000/experimental-pizza-arcade.png" />
    <App />
  </Provider>
);


