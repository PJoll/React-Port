import React from 'react'
import './App.css';

import Home from "./components/Home"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Footer from "./components/Footer";

export function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />

      <About />
      <Technologies />
      <Project />


      <Footer />

    </main>






  );
}

export default App;
