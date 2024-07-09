import React from 'react'
import ReactDOM from 'react-dom/client'
// Import our custom CSS
import './styles/sass/style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import './index.css'

import { Tooltip, Toast, Popover } from 'bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
