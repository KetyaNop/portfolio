import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src="/me.jpg" alt="me"></img>
      <div className="profile-info">
        <h1>
          <strong>Ketya Nop</strong>
        </h1>
        <h2>CS + ML @ Princeton</h2>
        <div className="profile-links"></div>
      </div>
    </div>
  );
};

export default Profile;
