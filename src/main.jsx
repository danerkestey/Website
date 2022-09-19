import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Router from './Router'
import { AppContainer } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContainer>
      <Router/>
    </AppContainer>
  </React.StrictMode>
)
