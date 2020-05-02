import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './App';
import 'normalize.css/normalize.css';
import './styles/index.scss';

const store = configureStore({ reducer: rootReducer });

export type TAppDispatch = typeof store.dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
