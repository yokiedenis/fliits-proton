import React from 'react';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import  Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
