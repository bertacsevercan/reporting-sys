import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";
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

const Register = () => {
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
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
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
                Submit
              </Button>
            </Form.Item>
          </>
        )}
        {message && (
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger" // change these to antd alert
            }
            role="alert"
          >
            {message}
          </div>
        )}
      </Form>
    </div>
  );
};

export default Register;
