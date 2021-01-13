import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { Form, Input, Button, Avatar, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

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

  const handleLogin = (values) => {
    dispatch(login(values.username, values.password))
      .then(() => {
        props.history.push("/user");
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
    return <Redirect to="/user" />;
  }

  return (
    <div className="login">
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button id="loginButton" type="primary" htmlType="submit">
            Login
          </Button>

          <Button href="/register">Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
