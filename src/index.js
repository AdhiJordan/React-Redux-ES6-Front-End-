import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ApplicationHome from './components/ApplicationHome.js';
import reducers from './reducers';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ApplicationHome />
  </Provider>
  , document.querySelector('.container'));

