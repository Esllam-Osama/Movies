import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Movies/'>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
)
