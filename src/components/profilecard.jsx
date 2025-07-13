import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/avatar.png';
import directorIcon from '../assets/directer.png';
import actorIcon from '../assets/avatar.png';
import cameramanIcon from '../assets/camaraman.png';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const [profile, setProfile] = useState({
    name: 'vijayan',
    role: 'Director',
    email: 'shainny@example.com',
    phone: '+91 98765 43210',
    location: 'Chennai, India',
    experience: '5 years',
    projects: '10+ short films',
    bio: '🎬 Passionate about cinema and creativity.',
    avatar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  const getRoleIcon = (role) => {
    switch (role.toLowerCase()) {
      case 'director':
        return directorIcon;
      case 'actor':
      case 'artiest':
        return actorIcon;
      case 'cameraman':
        return cameramanIcon;
      default:
        return defaultAvatar;
    }
  };

  const handleSave = () => {
    if (agreed) {
      setIsEditing(false);
      navigate('/dashboard');
    } else {
      alert('Please accept the terms to proceed.');
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-main-content">
        <h2 className="dashboard-label">🎥 My Profile</h2>

        <div className="profile-card-glass">
          <div className="profile-right-glass">
            <div className="avatar-frame-glass">
              <img src={profile.avatar || getRoleIcon(profile.role)} alt="Avatar" />
            </div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          <div className="profile-left-glass">
            {isEditing ? (
              <>
                <input name="name" value={profile.name} onChange={handleInputChange} placeholder="Name" />
                <select name="role" value={profile.role} onChange={handleInputChange}>
                  <option value="Director">Director</option>
                  <option value="Actor">Actor</option>
                  <option value="Cameraman">Cameraman</option>
                </select>
                <input name="email" value={profile.email} onChange={handleInputChange} placeholder="Email" />
                <input name="phone" value={profile.phone} onChange={handleInputChange} placeholder="Phone" />
                <input name="location" value={profile.location} onChange={handleInputChange} placeholder="Location" />
                <input name="experience" value={profile.experience} onChange={handleInputChange} placeholder="Experience" />
                <input name="projects" value={profile.projects} onChange={handleInputChange} placeholder="Projects" />
                <textarea name="bio" value={profile.bio} onChange={handleInputChange} placeholder="Bio" />

                <label className="checkbox-label">
                  <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
                  Accept terms and conditions
                </label>

                <button onClick={handleSave} className="save-btn-glass">💾 Save & Go to Dashboard</button>
              </>
            ) : (
              <>
                <h2>{profile.name}</h2>
                <p><strong>Role:</strong> {profile.role}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Experience:</strong> {profile.experience}</p>
                <p><strong>Projects:</strong> {profile.projects}</p>
                <p>{profile.bio}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Font and styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        .profile-wrapper {
          display: flex;
          height: 100vh;
          background: linear-gradient(120deg, #000000, #111111, #222222);
          overflow: hidden;
        }

        .profile-main-content {
          flex: 1;
          padding: 40px;
          overflow-y: auto;
          color: #e0f7fa;
        }

        .dashboard-label {
          font-size: 30px;
          font-weight: 600;
          color: #00faff;
          text-shadow: 0 0 12px #00faff;
          margin-bottom: 30px;
        }

        .profile-card-glass {
          display: flex;
          gap: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          animation: fadeInUp 0.8s ease-in-out;
        }

        .profile-left-glass {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .profile-left-glass input,
        .profile-left-glass select,
        .profile-left-glass textarea {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid #00ffc3;
          padding: 14px;
          border-radius: 10px;
          color: #ffffff;
          font-size: 15px;
        }

        .profile-left-glass textarea {
          height: 100px;
          resize: none;
        }

        .profile-left-glass input:focus,
        .profile-left-glass select:focus,
        .profile-left-glass textarea:focus {
          outline: none;
          background: rgba(0, 0, 0, 0.8);
          box-shadow: 0 0 10px #00ffc3;
        }

        .checkbox-label {
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .save-btn-glass {
          padding: 14px 24px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #00e6f6, #00ffc3);
          color: #000;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 0 14px #00ffc3;
          transition: 0.3s ease;
        }

        .save-btn-glass:hover {
          transform: scale(1.05);
          background: linear-gradient(90deg, #00ffc3, #00e6f6);
        }

        .profile-right-glass {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .avatar-frame-glass {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #00ffc3;
          box-shadow: 0 0 25px #00ffc3;
        }

        .avatar-frame-glass img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        input[type="file"]::-webkit-file-upload-button {
          background: #00bcd4;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        input[type="file"]::-webkit-file-upload-button:hover {
          background: #0096a4;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @media (max-width: 768px) {
          .profile-card-glass {
            flex-direction: column;
            align-items: center;
          }

          .profile-left-glass,
          .profile-right-glass {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default UserProfilePage;
