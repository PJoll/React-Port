import React from 'react'
import './App.css';
import background from "./images/Background.jpg"
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <div style={{ backgroundImage: `url(${background})`}} >
    <div className='App container my-10 mx-auto max-w-screen-lg '>
      <About/>
      Hello
      <Project />
      <Footer />

      </div>
      </div>
      </main>

      </div>
   
  );
}

export default App;
