import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { getAdminBoard } from "../../services/user.service";

const { Title } = Typography;

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getAdminBoard().then(
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
    <div className="boardAdmin">
      <Title level={3}>{content}</Title>
    </div>
  );
};

export default BoardAdmin;
