import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

import { ThemeProvider } from 'styled-components'
import { theme } from './colors'

import { ContextProvider } from './contexts/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
)
