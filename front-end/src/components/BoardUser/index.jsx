import React, { useState, useEffect } from "react";
import { getUserBoard } from "../../services/user.service";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import "./style.css";

const { Title } = Typography;

const BoardUser = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="boardUser">
      <Title>Welcome {currentUser.username}</Title>
      <Title level={3}>{content}</Title>
    </div>
  );
};

export default BoardUser;
