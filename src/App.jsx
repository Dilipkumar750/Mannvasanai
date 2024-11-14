import {React,  useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
    <Navbar/>
   <Home/>
  
    </>
  )
}

export default App
