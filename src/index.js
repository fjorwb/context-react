import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import State from './context/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>
)
