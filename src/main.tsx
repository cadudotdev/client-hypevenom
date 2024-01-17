import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeaderProvider } from './components/headerContext/HeaderProvider.tsx'
import App from './App.tsx'
import { GlobalStyle } from './style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
    <GlobalStyle />
  </React.StrictMode>
)
