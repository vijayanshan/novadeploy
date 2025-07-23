// src/components/jobpage.jsx
import React from "react";

const Jobs = ({ setActiveSection }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "3rem",
      flexWrap: "wrap",
      padding: "2rem"
    }}>
      {/* Find Job */}
      <div
        onClick={() => setActiveSection("Find Jobs")}
        style={boxStyle}
      >
        🎯 I'm Finding a Job
      </div>

      {/* Hire */}
      <div
        onClick={() => setActiveSection("Hire")}
        style={boxStyle}
      >
        📢 I'm Hiring
      </div>
    </div>
  );
};

const boxStyle = {
  width: "300px",
  height: "300px",
  backgroundColor: "#00ffee",
  color: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  borderRadius: "20px",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 0 25px rgba(0,255,238,0.5)",
  transition: "transform 0.3s ease",
};

export default Jobs;
