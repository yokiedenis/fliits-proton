import React from 'react';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import Footer from './components/Footer';
import  Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
