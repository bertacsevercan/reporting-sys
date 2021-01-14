import React from "react";
import { Redirect } from "react-router-dom";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import "./style.css";

const { Title, Text } = Typography;

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <Title>
        <strong>{currentUser.username}</strong>'s Profile
      </Title>
      <Text>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </Text>
      <Text>
        <strong>Id:</strong> {currentUser.id}
      </Text>
      <Text>
        <strong>Email:</strong> {currentUser.email}
      </Text>
      <strong>Authorities: </strong>
      {currentUser.roles}
    </div>
  );
};

export default Profile;
