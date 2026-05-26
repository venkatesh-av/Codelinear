import React from 'react';
import './Sidebar.css';
import profileImg from '../../assets/profile.svg';

const avatars = [profileImg, profileImg, profileImg];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-card">
        <div className="sidebar-title">Team</div>
        <div className="avatar-list">
          {avatars.map((s, i) => (
            <img key={i} src={s} alt={`avatar-${i}`} className="avatar" />
          ))}
        </div>
      </div>

      <div className="sidebar-card small">
        <div className="sidebar-title">Quick actions</div>
        <button className="action">Send transfer</button>
        <button className="action outline">Add new</button>
      </div>
    </div>
  );
}
