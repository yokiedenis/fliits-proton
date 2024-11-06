import { useState } from 'react';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">
        Join FL<span className="highlight">ii</span>TS
      </h1>
      
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️"}
            </button>
          </div>
        </div>

        <button type="submit" className="signup-button">
          Sign up
        </button>

        {/* <div className="divider">
          <span>OR</span>
        </div>

        <button type="button" className="google-signup">
          <img 
            src="/google-icon.png" 
            alt="Google" 
            className="google-icon"
          />
          Sign up with Google
        </button> */}

        <div className="login-link">
          Already have an account?{" "}
          <Link to="/Login" className="footer-link">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;