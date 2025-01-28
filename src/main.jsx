import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <Home />
    <Footer />

  </StrictMode>,
)
