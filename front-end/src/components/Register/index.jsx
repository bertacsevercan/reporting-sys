import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";
import {
  Form,
  Input,
  Button,
  Avatar,
  Alert,
  Row,
  Col,
  Typography,
  Divider,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const Register = () => {
  const { t } = useTranslation();
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = (values) => {
    dispatch(register(values.username, values.email, values.password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  const handleRegisterFailed = (err) => {
    console.log("Register failed:", err);
  };

  return (
    <div className="register">
      <Divider>
        <Title>{t("login.title")}</Title>
      </Divider>
      <div className="avatar-wrapper">
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          icon={<UserOutlined />}
        />
      </div>
      <Form
        {...layout}
        name="registerForm"
        initialValues={{
          remember: true,
        }}
        onFinish={handleRegister}
        onFinishFailed={handleRegisterFailed}
      >
        {!successful && (
          <>
            <Form.Item
              label={t("login.texts.text1")}
              name="username"
              rules={[
                {
                  required: true,
                  message: t("login.messages.message1"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: t("login.messages.message4"),
                },
                {
                  required: true,
                  message: t("login.messages.message3"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("login.texts.text2")}
              name="password"
              rules={[
                {
                  required: true,
                  message: t("login.messages.message2"),
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button id="registerButton" type="primary" htmlType="submit">
                {t("login.texts.text4")}
              </Button>

              <Button href="/login">{t("login.texts.text3")}</Button>
            </Form.Item>
          </>
        )}
        {message && (
          <>
            <Row gutter={[0, 24]}>
              <Col offset={6} span={12}>
                {successful ? (
                  <Alert message={message} type="success" showIcon />
                ) : (
                  <Alert message={message} type="error" showIcon />
                )}
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col offset={6} span={12}>
                <Button href="/login" type="primary">
                  {t("login.texts.text3")}
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </div>
  );
};

export default Register;
