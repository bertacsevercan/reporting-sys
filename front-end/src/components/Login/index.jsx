import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { Form, Input, Button, Avatar, Alert, Typography, Divider } from "antd";
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

const Login = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogin = (values) => {
    dispatch(login(values.username, values.password))
      .then(() => {
        props.history.push("/report");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginFailed = (errorInfo) => {
    console.log("Login failed:", errorInfo);
  };

  if (isLoggedIn) {
    return <Redirect to="/report" />;
  }

  return (
    <div className="login">
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
        name="loginForm"
        onFinish={handleLogin}
        onFinishFailed={handleLoginFailed}
        initialValues={{ remember: true }}
      >
        {message && (
          <Form.Item {...tailLayout}>
            <Alert message={message} type="error" showIcon />
          </Form.Item>
        )}
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
          <Button id="loginButton" type="primary" htmlType="submit">
            {t("login.texts.text3")}
          </Button>

          <Button href="/register">{t("login.texts.text4")}</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
