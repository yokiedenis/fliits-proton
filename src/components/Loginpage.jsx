// LoginPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login({ onSignUpLinkClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", email, password);
    // Add your authentication logic here.
  };

  return (
    <div className="login-container">
      <h1 className="login-title">
        Welcome to FL<span className="highlight">ii</span>TS
      </h1>
      <h3>Login With Google</h3>
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
        <Link to="#" className="footer-link" onClick={onSignUpLinkClick}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
