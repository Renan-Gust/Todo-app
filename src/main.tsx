import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

// import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './colors'

import { ThemeContextProvider } from './contexts/Theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
