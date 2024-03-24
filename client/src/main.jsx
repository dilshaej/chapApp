// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './Redux/store'; // Import your Redux store
import './bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}> {/* Wrap App with Provider and pass the Redux store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
