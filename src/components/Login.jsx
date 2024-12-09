import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login({ onSignUpLinkClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);

        // Save the token in localStorage
        localStorage.setItem('token', data.token);

        navigate('/'); 
      } else {
        setError(data.message || 'An error occurred during login.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">
        Welcome to FL<span className="highlight">ii</span>TS
      </h1>
      <h3>Login With Google</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
      <div className="Signup_link">
        <span>Don’t have an account? </span>
        <Link to="#" className="footer-link" onClick={onSignUpLinkClick}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
