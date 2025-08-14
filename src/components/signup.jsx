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
  };

  const pageWrapper = {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  };

  const container = {
    width: '400px',
    minHeight: '580px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '40px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  };

  const smallLink = {
    fontSize: '12px',
    marginTop: '10px',
    color: '#ffd6d6',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    cursor: 'pointer',
  };

  const toggleLink = {
    fontSize: '13px',
    marginTop: '20px',
    color: '#ffeaea',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const messageStyle = {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    color: '#0f0',
    fontSize: '14px',
    textAlign: 'center',
  };

  return (
    <div style={pageWrapper}>
      <div style={container}>
        <h2>{isSignedUp ? "Welcome Back" : isVerifyingOtp ? "Verify Email" : "Create Account"}</h2>

        {!isSignedUp && !isVerifyingOtp && (
          <form onSubmit={handleSignup} style={{ width: '100%' }}>
            <input type="text" placeholder="Full Name" name="name" style={input} value={formData.name} onChange={handleInputChange} required />
            <input type="email" placeholder="Email" name="email" style={input} value={formData.email} onChange={handleInputChange} required />
            <input type="password" placeholder="Password" name="password" style={input} value={formData.password} onChange={handleInputChange} required />
            <input type="password" placeholder="Confirm Password" name="confirm" style={input} value={formData.confirm} onChange={handleInputChange} required />
            <button type="submit" style={button}>Send OTP</button>
          </form>
        )}

        {isVerifyingOtp && (
          <form onSubmit={handleVerifyOtp} style={{ width: '100%' }}>
            <input type="text" placeholder="Enter OTP" style={input} value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <button type="submit" style={button}>Verify & Continue</button>
          </form>
        )}

   {isSignedUp && (
  <form onSubmit={handleLogin} style={{ width: '100%' }}>
    <input type="email" placeholder="Email" name="loginEmail" style={input} required />
    <input type="password" placeholder="Password" name="loginPassword" style={input} required />
    <a href="#" style={smallLink}>Forgot password?</a>
    <button type="submit" style={button}>Login</button>
  </form>
)}


        {message && <div style={messageStyle}>{message}</div>}
      </div>
    </div>
  );
};

export default LoginSignup;
