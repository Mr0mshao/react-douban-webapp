import 'normalize.css'
import './utils/globa.less'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './redux'
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
