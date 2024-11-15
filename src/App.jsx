import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Loginpage';
import Carshare from './pages/Carshare';
import Home from './pages/Home'; 
import CarListingForm from './pages/CarListingForm';
import './App.css';
import '@fontsource/roboto'; 

function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Routes>
          {/* Define routes for each page */}
        <Route path="/login" element={<Login />} />
        <Route path="/Carshare" element={<Carshare />} />
        <Route path="/car-listing" element={<CarListingForm />} />
        <Route path="/" element={<Home />} />
        </Routes>
       
        <Footer />
        </div>
      </Router>
  );
}

export default App;
