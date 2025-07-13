import React, { useState } from 'react';

const LoginSignup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const pageWrapper = {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    animation: 'gradientBG 10s ease infinite',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  };

  const container = {
    width: '400px',
    minHeight: '520px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '40px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.5s ease',
  };

  const heading = {
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: '600',
    textAlign: 'center',
  };

  const input = {
    width: '100%',
    padding: '12px 15px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  };

  const button = {
    marginTop: '20px',
    width: '100%',
    padding: '12px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const smallLink = {
    fontSize: '12px',
    marginTop: '10px',
    color: '#ffd6d6',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('Signup successful!');
      setIsSignedUp(true);
    }, 700);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful!');
  };

  return (
    <div style={pageWrapper}>
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          *::placeholder {
            color: #eee;
            opacity: 0.8;
          }

          input:focus {
            background-color: rgba(255, 255, 255, 0.3);
          }

          button:hover {
            background-color: #ff4b4b;
          }
        `}
      </style>

      <div style={container}>
        {!isSignedUp ? (
          <>
            <h2 style={heading}>Create Account</h2>
            <form onSubmit={handleSignup} style={{ width: '100%' }}>
              <input type="text" placeholder="Full Name" style={input} required />
              <input type="email" placeholder="Email" style={input} required />
              <input type="password" placeholder="Password" style={input} required />
              <button type="submit" style={button}>Sign Up</button>
            </form>
          </>
        ) : (
          <>
            <h2 style={heading}>Welcome Back</h2>
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              <input type="email" placeholder="Email" style={input} required />
              <input type="password" placeholder="Password" style={input} required />
              <a href="#" style={smallLink}>Forgot password?</a>
              <button type="submit" style={button}>Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
