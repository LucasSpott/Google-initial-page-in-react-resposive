import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './assets/Main/Main'
import Header from './assets/Header/Header'
import Footer from './assets/Footer/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
)
