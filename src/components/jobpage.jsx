import React, { useState } from "react";

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState("find"); // "find" or "hire"

  return (
    <div style={{ padding: "2rem", color: "white", minHeight: "100vh", background: "#0e0e1f" }}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setActiveTab("find")}
          style={{
            padding: "0.7rem 1.5rem",
            background: activeTab === "find" ? "#00ffee" : "#333",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🎯 I'm Finding a Job
        </button>
        <button
          onClick={() => setActiveTab("hire")}
          style={{
            padding: "0.7rem 1.5rem",
            background: activeTab === "hire" ? "#00ffee" : "#333",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          📢 I'm Hiring
        </button>
      </div>

      {activeTab === "find" ? (
        <div>
          <h2>🎬 Job Opportunities</h2>
          <ul>
            <li><strong>Assistant Director</strong> – Chennai – ₹30,000/month</li>
            <li><strong>Camera Operator</strong> – Mumbai – ₹25,000/project</li>
            <li><strong>Background Actor</strong> – Bangalore – ₹2,000/day</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>📝 Post a Job</h2>
          <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
            <label>Role:
              <input type="text" placeholder="e.g. Editor" style={{ margin: "0.5rem 0" }} />
            </label>
            <label>Location:
              <input type="text" placeholder="e.g. Hyderabad" style={{ margin: "0.5rem 0" }} />
            </label>
            <label>Pay/Salary:
              <input type="text" placeholder="e.g. ₹50,000/month" style={{ margin: "0.5rem 0" }} />
            </label>
            <button
              type="submit"
              style={{
                marginTop: "1rem",
                padding: "0.6rem",
                backgroundColor: "#00ffee",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✅ Post Job
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
