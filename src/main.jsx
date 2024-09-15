import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Footer } from './components';
import CursorProvider from './contexts/CursorContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorProvider>
    <div className="app-container">
      <div>
        <App />
      </div>
      <Footer />
    </div>
    </CursorProvider>
  </React.StrictMode>,
)
