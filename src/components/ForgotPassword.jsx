import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your registered email.");
      return;
    }

    // Simulate sending reset link
    setSubmitted(true);
    setTimeout(() => {
      alert(`Reset link sent to ${email}`);
      navigate('/'); // Redirect to home or login after success
    }, 1000);
  };

  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    padding: 20,
  };

  const box = {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: 30,
    borderRadius: 12,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
    maxWidth: 400,
    width: '100%',
    textAlign: 'center',
  };

  const input = {
    width: '100%',
    padding: 12,
    margin: '15px 0',
    borderRadius: 8,
    border: 'none',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: 16,
    outline: 'none',
  };

  const button = {
    width: '100%',
    padding: 12,
    background: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 16,
    cursor: 'pointer',
    transition: '0.3s ease',
  };

  const linkStyle = {
    marginTop: 20,
    color: '#00f',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2>Forgot Password</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={input}
              required
            />
            <button type="submit" style={button}>Send Reset Link</button>
          </form>
        ) : (
          <p style={{ marginTop: 20 }}>Reset link sent to your email!</p>
        )}

        <p style={{ marginTop: 20 }}>
          Don’t have an account?{' '}
          <span
            style={linkStyle}
            onClick={() => navigate('/signup')}
          >
            Register
          </span>
        </p>
        <p>
          Already have an account?{' '}
          <span
            style={linkStyle}
            onClick={() => navigate('/')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
