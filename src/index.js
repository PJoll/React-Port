import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();