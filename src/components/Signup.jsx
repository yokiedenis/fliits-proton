import { useState } from 'react';
import '../styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for signup
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    setLoading(true); // Set loading state

    try {
      const response = await fetch('http://localhost:5000/api/auth/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        console.log('Signup successful:', data);

        // Store user details in localStorage
        localStorage.setItem('userName', data.user.fullName);
        localStorage.setItem('userEmail', data.user.email);

        // Redirect to the login page after a short delay
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError(data.message || 'An error occurred during signup.');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      setError('Unable to connect to the server. Please check your connection.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">
        Join FL<span className="highlight">ii</span>TS
      </h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

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
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="signup-button" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>

        <div className="login-link">
          Already have an account?{' '}
          <Link to="/Login" className="footer-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;