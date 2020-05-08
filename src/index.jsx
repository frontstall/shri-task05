import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

import App from './App';
import 'normalize.css/normalize.css';
import './styles/index.scss';

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
