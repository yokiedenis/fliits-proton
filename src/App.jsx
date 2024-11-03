import React from 'react';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero />
      
      <Footer/>
    </div>
  );
}

export default App;
