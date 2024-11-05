
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Content from './components/Content';
import Home from './pages/Home'; // Import Home page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavMenu />
            <Hero />
            <Content />
        <Routes>
          {/* <Route path="/" element={<Home />} />       */}
          {/* <Route path="/login" element={<Login />} />  */}
        </Routes>
        <Footer />
      </div>
    </Router>
        <Hero />
        
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
