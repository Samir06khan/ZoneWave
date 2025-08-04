import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from "./components/NavBar";
import Hero from "./components/Hero.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Navbar/>
        <Hero/>
        <App/>
    </StrictMode>,
)
