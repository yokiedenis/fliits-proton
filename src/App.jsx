import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Carshare from "./pages/Carshare";
import Home from "./pages/Home";
import CarListingForm from "./pages/CarListingForm";
import AfterSearch from "./pages/AfterSearch";
import CarInfoPage from "./pages/CarInfoPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ForgotPassword from "./components/ForgotPassword";
import PaymentInfo from "./pages/Paymentnfo";
import "./App.css";
import "@fontsource/roboto";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for each page */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Carshare" element={<Carshare />} />
        <Route path="/car-listing" element={<CarListingForm />} />
        <Route path="/AfterSearch" element={<AfterSearch/>} />
        <Route path="/CarInfoPage" element={<CarInfoPage />} />
        <Route path="/FeedBackForm" element={<FeedbackForm />} />
        <Route path="/car-info" element={<CarInfoPage />} />
        <Route path="/payment-info" element={<PaymentInfo />} />
        <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        </div>
      </Router>

  );
}

export default App;
