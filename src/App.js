import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home">
      <Header />
      <Home />
      <Services />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
