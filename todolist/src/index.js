import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Home from './Views/todoList/Home';
import Store from './Redux/Store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <Home />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

