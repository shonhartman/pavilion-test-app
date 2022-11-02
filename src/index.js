import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import './styles';
import './scripts';
import IndexView from './views/IndexView';

ReactDOM.render(
  <React.StrictMode>
    <IndexView />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
