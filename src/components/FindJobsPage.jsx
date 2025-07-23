import React, { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Assistant Director",
    company: "CineCraft Studios",
    location: "Chennai",
    salary: "₹30,000/month",
    type: "Full-time",
    posted: "2 days ago",
    description: "Coordinate film production, manage crew, support director tasks."
  },
  {
    id: 2,
    title: "Camera Operator",
    company: "VisionFrame Media",
    location: "Mumbai",
    salary: "₹25,000/project",
    type: "Freelance",
    posted: "1 day ago",
    description: "Capture high-quality footage using cameras and support equipment."
  },
  {
    id: 3,
    title: "Background Actor",
    company: "SceneSet Castings",
    location: "Bangalore",
    salary: "₹2,000/day",
    type: "Part-time",
    posted: "3 hours ago",
    description: "Participate in scenes as background characters."
  },
  {
    id: 4,
    title: "Video Editor",
    company: "FrameFlex Studios",
    location: "Chennai",
    salary: "₹35,000/month",
    type: "Full-time",
    posted: "5 hours ago",
    description: "Edit raw footage, add effects, color grade and prepare final cuts."
  },
];

const FindJobsPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (type === "" || job.type === type)
  );

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0b0b1e",
      padding: "2rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#fff",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#00ffff",
      marginBottom: "0.5rem",
    },
    subtext: {
      color: "#ccc",
      marginBottom: "2rem",
    },
    filterContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      marginBottom: "2rem",
    },
    input: {
      padding: "0.75rem",
      borderRadius: "8px",
      border: "1px solid #00ffee",
      backgroundColor: "#111",
      color: "#fff",
      flex: "1",
    },
    jobCard: {
      backgroundColor: "#111827",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(0,255,255,0.2)",
      marginBottom: "1.5rem",
    },
    jobTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#00ffff",
    },
    jobInfo: {
      fontSize: "0.95rem",
      color: "#ccc",
      marginTop: "0.5rem",
    },
    applyBtn: {
      marginTop: "1rem",
      padding: "0.6rem 1.2rem",
      backgroundColor: "#00ffee",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🎞️ Film Industry Jobs</h1>
      <p style={styles.subtext}>Find your next role in the creative industry</p>

      {/* Filters */}
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        >
          <option value="">All Locations</option>
          {[...new Set(jobs.map((j) => j.location))].map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.input}
        >
          <option value="">All Types</option>
          {[...new Set(jobs.map((j) => j.type))].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Job List */}
      {filteredJobs.map((job) => (
        <div key={job.id} style={styles.jobCard}>
          <h2 style={styles.jobTitle}>{job.title}</h2>
          <div style={styles.jobInfo}>🏢 {job.company}</div>
          <div style={styles.jobInfo}>📍 {job.location} | 💼 {job.type}</div>
          <div style={styles.jobInfo}>💰 {job.salary}</div>
          <div style={styles.jobInfo}>🕒 Posted {job.posted}</div>
          <p style={{ ...styles.jobInfo, marginTop: "0.5rem" }}>{job.description}</p>
          <button style={styles.applyBtn}>Apply Now</button>
        </div>
      ))}

      {filteredJobs.length === 0 && (
        <p style={{ color: "#aaa", textAlign: "center", marginTop: "2rem" }}>
          No jobs found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default FindJobsPage;
