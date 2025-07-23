import React, { useState } from "react";

const roles = {
  Director: "Creative minds behind every great story.",
  Actor: "Leading men and women ready for your vision.",
  Writer: "Stories that move the audience and win hearts.",
  Cameraman: "Experts in visual storytelling.",
  Editor: "Perfecting every frame.",
  "Makeup Artist": "Crafting on-screen magic.",
  Stylist: "Looks that define scenes.",
  Producer: "Powering projects to reality.",
  Other: "",
};

const HirePage = () => {
  const [formData, setFormData] = useState({
    role: "",
    customRole: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    salary: "",
    description: "",
    otherDetails: "",
  });

  const [jobList, setJobList] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalRole = formData.role === "Other" ? formData.customRole : formData.role;
    const newJob = { ...formData, finalRole };
    setJobList((prev) => [...prev, newJob]);
    setFormData({
      role: "",
      customRole: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      location: "",
      salary: "",
      description: "",
      otherDetails: "",
    });
  };

  const styles = {
    page: {
      background: "#0e0e1f",
      color: "#fff",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "2rem",
    },
    layout: {
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      flexWrap: "wrap",
    },
    form: {
      flex: "1",
      maxWidth: "600px",
      backgroundColor: "#1a1a2e",
      padding: "2rem",
      borderRadius: "12px",
      border: "1px solid #333",
    },
    list: {
      flex: "1",
      minWidth: "300px",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1rem",
      fontSize: "1rem",
      color: "#ccc",
    },
    input: {
      marginTop: "0.4rem",
      padding: "0.7rem",
      backgroundColor: "#121223",
      border: "1px solid #444",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "1rem",
    },
    textarea: {
      marginTop: "0.4rem",
      padding: "0.7rem",
      backgroundColor: "#121223",
      border: "1px solid #444",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "1rem",
      resize: "vertical",
      minHeight: "80px",
    },
    select: {
      marginTop: "0.4rem",
      padding: "0.7rem",
      backgroundColor: "#121223",
      border: "1px solid #444",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "1rem",
    },
    button: {
      padding: "0.8rem",
      backgroundColor: "#00ffee",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "1rem",
    },
    jobCard: {
      backgroundColor: "#1a1a2e",
      padding: "1.5rem",
      borderRadius: "10px",
      border: "1px solid #333",
      marginBottom: "1.5rem",
    },
    jobTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    detail: {
      color: "#aaa",
      fontSize: "0.95rem",
    },
    applyBtn: {
      marginTop: "1rem",
      padding: "0.6rem 1.2rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🎬 Hire Talent & Manage Your Postings</h2>

      <div style={styles.layout}>
        {/* Left: Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Role:
            <select
              style={styles.select}
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
            >
              <option value="">Select a role</option>
              {Object.keys(roles).map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </label>

          {formData.role === "Other" && (
            <label style={styles.label}>
              Enter Custom Role:
              <input
                type="text"
                value={formData.customRole}
                onChange={(e) => handleChange("customRole", e.target.value)}
                placeholder="e.g. VFX Artist"
                style={styles.input}
              />
            </label>
          )}

          <label style={styles.label}>
            Your Name:
            <input type="text" value={formData.name} placeholder="Your Name" style={styles.input} onChange={(e) => handleChange("name", e.target.value)} />
          </label>

          <label style={styles.label}>
            Company Name:
            <input type="text" value={formData.company} placeholder="Company" style={styles.input} onChange={(e) => handleChange("company", e.target.value)} />
          </label>

          <label style={styles.label}>
            Email ID:
            <input type="email" value={formData.email} placeholder="Email" style={styles.input} onChange={(e) => handleChange("email", e.target.value)} />
          </label>

          <label style={styles.label}>
            Phone Number:
            <input type="tel" value={formData.phone} placeholder="Phone" style={styles.input} onChange={(e) => handleChange("phone", e.target.value)} />
          </label>

          <label style={styles.label}>
            Location:
            <input type="text" value={formData.location} placeholder="Location" style={styles.input} onChange={(e) => handleChange("location", e.target.value)} />
          </label>

          <label style={styles.label}>
            Pay/Salary:
            <input type="text" value={formData.salary} placeholder="₹50,000/month" style={styles.input} onChange={(e) => handleChange("salary", e.target.value)} />
          </label>

          <label style={styles.label}>
            Job Description:
            <textarea value={formData.description} placeholder="Describe the job..." style={styles.textarea} onChange={(e) => handleChange("description", e.target.value)} />
          </label>

          <label style={styles.label}>
            Other Details:
            <textarea value={formData.otherDetails} placeholder="Project type, skills, start date..." style={styles.textarea} onChange={(e) => handleChange("otherDetails", e.target.value)} />
          </label>

          <button type="submit" style={styles.button}>✅ Post Job</button>
        </form>

        {/* Right: Posted Jobs */}
        <div style={styles.list}>
          <h3 style={{ marginBottom: "1rem" }}>📋 My Hiring Posts</h3>
          {jobList.length === 0 ? (
            <p style={{ color: "#aaa" }}>No jobs posted yet.</p>
          ) : (
            jobList.map((job, index) => (
              <div key={index} style={styles.jobCard}>
                <div style={styles.jobTitle}>
                  📌 {job.finalRole} at {job.company}
                </div>
                <div style={styles.detail}>👤 Posted by: {job.name}</div>
                <div style={styles.detail}>📍 {job.location} | 💰 {job.salary}</div>
                <div style={styles.detail}>📧 {job.email} | 📱 {job.phone}</div>
                <p style={styles.detail}>📝 {job.description}</p>
                {job.otherDetails && <p style={styles.detail}>🗒️ {job.otherDetails}</p>}
                <button style={styles.applyBtn}>Apply Now</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HirePage;
