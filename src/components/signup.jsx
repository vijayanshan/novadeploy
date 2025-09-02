import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const correctOtp = "123456";
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      return setMessage("Passwords do not match.");
    }
    setIsVerifyingOtp(true);
    setMessage("OTP sent to your email. Please verify.");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === correctOtp) {
      setMessage("Signup complete! You can now login.");
      setIsVerifyingOtp(false);
      setIsSignedUp(true);
      setFormData({ name: '', email: '', password: '', confirm: '' });
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("Login successful!");
    setTimeout(() => navigate('/dashboard'), 1000);  // Redirect after login
  };

  const pageWrapper = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    fontFamily: 'Poppins, sans-serif',
  };

  const container = {
    width: '400px',
    minHeight: '580px',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '40px',
    borderRadius: '20px',
    color: '#fff',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  };

  const input = {
    width: '100%',
    padding: '12px 15px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  };

  const button = {
    width: '100%',
    padding: '12px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHover = {
    backgroundColor: '#ff4f4f',
  };

  const smallLink = {
    fontSize: '12px',
    marginTop: '10px',
    color: '#ffd6d6',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    cursor: 'pointer',
  };

  const messageStyle = {
    marginTop: '15px',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '14px',
    textAlign: 'center',
    transition: 'opacity 0.3s ease',
  };

  const successMessage = {
    ...messageStyle,
    backgroundColor: 'rgba(0, 128, 0, 0.2)',
    color: '#0f0',
  };

  const errorMessage = {
    ...messageStyle,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    color: '#f00',
  };

  return (
    <div style={pageWrapper}>
      <div style={container}>
        <h2>{isSignedUp ? "Welcome Back" : isVerifyingOtp ? "Verify Email" : "Create Account"}</h2>

        {!isSignedUp && !isVerifyingOtp && (
          <form onSubmit={handleSignup} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <label htmlFor="name" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                style={input}
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Full Name"
              />
            </div>
            <div style={{ width: '100%' }}>
              <label htmlFor="email" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                style={input}
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
              />
            </div>
            <div style={{ width: '100%' }}>
              <label htmlFor="password" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                style={input}
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Password"
              />
            </div>
            <div style={{ width: '100%' }}>
              <label htmlFor="confirm" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Confirm Password</label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                style={input}
                value={formData.confirm}
                onChange={handleInputChange}
                required
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" style={button}>Send OTP</button>
          </form>
        )}

        {isVerifyingOtp && (
          <form onSubmit={handleVerifyOtp} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <label htmlFor="otp" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                style={input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter OTP"
              />
            </div>
            <button type="submit" style={button}>Verify & Continue</button>
          </form>
        )}

        {isSignedUp && (
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <label htmlFor="loginEmail" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Email</label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                style={input}
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
              />
            </div>
            <div style={{ width: '100%' }}>
              <label htmlFor="loginPassword" style={{ fontSize: '14px', marginBottom: '5px', color: '#ffd6d6' }}>Password</label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                style={input}
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Password"
              />
            </div>
            <a href="#" style={smallLink}>Forgot password?</a>
            <button type="submit" style={button}>Login</button>
          </form>
        )}

        {message && (
          <div style={message.includes("success") ? successMessage : errorMessage}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
