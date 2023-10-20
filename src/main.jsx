import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClimaProvider from './context/ClimaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ClimaProvider>
        <App />
    </ClimaProvider>
)
