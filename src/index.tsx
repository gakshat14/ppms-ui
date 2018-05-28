import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './css/main.css';

const store = configureStore();
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>,  document.getElementById("root"));