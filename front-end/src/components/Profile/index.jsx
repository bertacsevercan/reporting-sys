import React from "react";
import { Redirect } from "react-router-dom";
import { Card, Avatar, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./style.css";

const { Title } = Typography;
const { Meta } = Card;

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
      <div className="card-wrapper">
        <Card
          style={{ width: 300, marginTop: 16 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={currentUser.username}
            description={`Email: ${currentUser.email}`}
          />
        </Card>
      </div>
    </div>
  );
};

export default Profile;
