import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#2a5298" }}>
          Forgot Password
        </h2>
        <p style={{ fontSize: "14px", marginBottom: "20px", color: "#555" }}>
          Enter your email and we'll send you a reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2a5298",
            color: "#000000ff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          <Link
            to="/"
            style={{ color: "#2a5298", textDecoration: "none", fontWeight: "bold" }}
          >
            ⬅ Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
