import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <h1>
        <strong>{currentUser.username}</strong>'s Profile 
      </h1>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities: </strong>
      {currentUser.roles}
    </div>
  );
};

export default Profile;
