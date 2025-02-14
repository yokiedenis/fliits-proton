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
          {/* Authentication Routes */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Dashboard & Profile */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Car Sharing & Listings */}
          <Route path="/carshare" element={<Carshare />} />
          <Route path="/car-listing" element={<CarListingForm />} />
          <Route path="/after-search" element={<AfterSearch />} />
          <Route path="/car-info" element={<CarInfoPage />} />

          {/* Payment Section */}
          <Route path="/payment-info" element={<PaymentInfo />} />

          {/* Home Route */}
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
