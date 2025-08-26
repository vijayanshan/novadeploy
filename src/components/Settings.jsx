import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  const styles = {
    container: {
      padding: "2rem",
      minHeight: "100vh",
      backgroundColor: isDark ? "#0e0e1f" : "#f1f1f1",
      color: isDark ? "#ffffff" : "#111111",
      transition: "all 0.3s ease",
      fontFamily: "sans-serif",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    section: {
      background: isDark ? "#1f1f2e" : "#ffffff",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: isDark
        ? "0 0 20px rgba(0, 255, 255, 0.1)"
        : "0 0 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "500px",
    },
    toggleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "1rem",
    },
    switch: {
      width: "60px",
      height: "30px",
      backgroundColor: isDark ? "#444" : "#ccc",
      borderRadius: "30px",
      position: "relative",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    knob: {
      width: "26px",
      height: "26px",
      backgroundColor: isDark ? "#00ffee" : "#333",
      borderRadius: "50%",
      position: "absolute",
      top: "2px",
      left: isDark ? "32px" : "2px",
      transition: "left 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚙️ Settings</h1>
      <div style={styles.section}>
        <h3>Appearance</h3>
        <div style={styles.toggleContainer}>
          <span>Dark Mode</span>
          <div style={styles.switch} onClick={toggleTheme}>
            <div style={styles.knob}></div>
          </div>
        </div>
      </div>

      {/* Future sections like Notification, Privacy, etc. can go here */}
    </div>
  );
};

export default Settings;
