
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/Loginpage';
import Home from './pages/Home'; 
import './App.css';
import '@fontsource/roboto'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
      
        <Routes>
          {/* Define routes for each page */}
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
       
        <Footer />
        </div>
      </Router>
  );
}

export default App;
