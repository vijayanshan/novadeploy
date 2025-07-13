import React, { useState, useRef } from "react";

const users = [
  { id: 1, name: "Shainny", avatar: "https://i.pravatar.cc/50?img=1", bio: "Creative Director. 🎬" },
  { id: 2, name: "Arya", avatar: "https://i.pravatar.cc/50?img=2", bio: "Actor & Model 🌟" },
  { id: 3, name: "Rahul", avatar: "https://i.pravatar.cc/50?img=3", bio: "Cinematographer 🎥" },
];

const Messages = () => {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [messages, setMessages] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const fileInputRef = useRef();

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, type: "text", sender: "me" }]);
      setNewMessage("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: URL.createObjectURL(file), type: file.type.startsWith("video") ? "video" : "image", sender: "me" }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#121212",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      {/* Sidebar */}
      <div style={{
        width: "20%",
        borderRight: "1px solid #333",
        padding: "1rem",
        background: "#1f1f1f",
        overflowY: "auto"
      }}>
        <h3 style={{ marginBottom: "1rem" }}>Chats</h3>
        {users.map(user => (
          <div key={user.id} onClick={() => { setActiveUser(user); setShowProfile(false); }} style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            cursor: "pointer",
            background: activeUser.id === user.id ? "#2c2c2c" : "transparent",
            borderRadius: "10px",
            padding: "0.5rem"
          }}>
            <img src={user.avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: "50%", marginRight: "0.75rem" }} />
            <div>
              <div style={{ fontWeight: "bold" }}>{user.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Chat Header */}
        <div style={{
          background: "#1f1f1f",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #333"
        }}>
          <img
            src={activeUser.avatar}
            alt="profile"
            style={{ width: 40, height: 40, borderRadius: "50%", marginRight: "0.75rem", cursor: "pointer" }}
            onClick={() => setShowProfile(true)}
          />
          <div>
            <div style={{ fontWeight: "bold" }}>{activeUser.name}</div>
            <div style={{ fontSize: "0.8rem", color: "#aaa" }}>Online</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          background: "#181818"
        }}>
          {messages.map((msg, index) => (
            <div key={index} style={{
              alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
              maxWidth: "70%",
              background: msg.sender === "me" ? "#007bff" : "#2a2a2a",
              padding: "0.5rem 1rem",
              borderRadius: "15px",
              color: "white"
            }}>
              {msg.type === "text" && msg.text}
              {msg.type === "image" && <img src={msg.text} alt="sent" style={{ maxWidth: 200, borderRadius: "10px" }} />}
              {msg.type === "video" && (
                <video controls style={{ maxWidth: 250, borderRadius: "10px" }}>
                  <source src={msg.text} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Typing Area */}
        <div style={{
          padding: "1rem",
          background: "#1f1f1f",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #333"
        }}>
          <button onClick={() => fileInputRef.current.click()} style={{ background: "transparent", border: "none", cursor: "pointer", color: "white", fontSize: "1.5rem", marginRight: "1rem" }}>
            📷
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message"
            style={{
              flex: 1,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              background: "#2c2c2c",
              color: "white"
            }}
          />
          <button onClick={sendMessage} style={{
            marginLeft: "1rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "0.5rem 1rem",
            cursor: "pointer"
          }}>
            Send
          </button>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} accept="image/*,video/*" onChange={handleFileUpload} />
        </div>
      </div>

      {/* Profile Popup */}
      {showProfile && (
        <div style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          background: "#1f1f1f",
          padding: "1.5rem",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.8)",
          zIndex: 1000
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>Profile</h3>
            <button onClick={() => setShowProfile(false)} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer", fontSize: "1.2rem" }}>✖</button>
          </div>
          <img src={activeUser.avatar} alt="Profile" style={{ width: 80, height: 80, borderRadius: "50%", margin: "1rem auto", display: "block" }} />
          <h4 style={{ textAlign: "center" }}>{activeUser.name}</h4>
          <p style={{ textAlign: "center", color: "#ccc" }}>{activeUser.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
