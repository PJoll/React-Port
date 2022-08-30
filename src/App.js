import React from 'react'
import './App.css';

import Home from "./components/Home"
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Project from "./components/Project";
import Footer from "./components/Footer";

export function App() {
  return (
   <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Home/>
      
      <About/>
       
    <Project/>
       
        
      <Footer/>
       
      </main>
     
     

    

     
  );
}

export default App;
