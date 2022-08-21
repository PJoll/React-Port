import React from 'react'
import './App.css';

import Home from "./components/Home"
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Routes>
      <Navbar/>
      <Route
      path= "/"
      element={<Home/>}
      />
      <Route 
      path="/about"
      element={<About/>}
        />
      <Route 
      path="/project"
      element={<Project/>}
        />
        <Route 
      path="/footer"
      element={<Footer/>}
        />
      
     
     

      </Routes>
      </Router>
    

     
  );
}

export default App;
