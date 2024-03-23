import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import './assets/fonts/font.css'
import { BrowserRouter as Router } from "react-router-dom";
import { TC } from './config/libs.js';

ReactDOM.createRoot(document.getElementById('vitalintegrate')).render(
  <Router>
    <TC />
    <App />
  </Router>
)
