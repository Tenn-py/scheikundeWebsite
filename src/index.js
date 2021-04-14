import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExperimentPage from './pages/Experimenten';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Test from './pages/Test';
import About from './pages/About';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();