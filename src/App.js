import React from 'react'
import './App.css';

import Home from "./components/Home"
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
      <Navbar/>
      <Home/>
      
      <About/>
       
      
    <Project/>
       
        
      <Footer/>
       
      </div>
     
     

    

     
  );
}

export default App;
