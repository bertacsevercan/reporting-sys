import React from "react";
import { Redirect } from "react-router-dom";
import { Card, Avatar, Typography, Row, Col, Divider } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./style.css";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;
const { Meta } = Card;

const Profile = () => {
  const { t } = useTranslation();
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <Divider>
        <Title>
          <strong>{currentUser.username}</strong> {t("profile")}
        </Title>
      </Divider>
      <div className="card-wrapper">
        <Row justify="space-around" gutter={[0, 16]}>
          <Col sm={24} md={12} lg={8}>
            <Card
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
                description={`Email: ${currentUser.email} and ID: ${currentUser.id}`}
              />
            </Card>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <div>
              <Card title="Lorem Ipsum!">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  corrupti, natus nulla obcaecati praesentium alias placeat
                  consectetur repellat nihil at earum illum error quisquam eaque
                  nemo sit aspernatur possimus adipisci!
                </Text>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
