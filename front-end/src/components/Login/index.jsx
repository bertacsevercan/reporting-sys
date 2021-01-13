import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { Form, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button href="/register" type="secondary">
            Register
          </Button>
        </Form.Item>

        {message && (
          <div className="alert danger" role="alert">
            {" "}
            {/* change them to antd alert */}
            {message}
          </div>
        )}
      </Form>
    </div>
  );
};

export default Login;
