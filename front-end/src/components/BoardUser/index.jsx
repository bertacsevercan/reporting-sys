import React, { useState, useEffect } from "react";
import { getUserBoard } from "../../services/user.service";
import { useSelector } from "react-redux";
import "./style.css";

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
      <h1>Welcome {currentUser.username}</h1>
      <h3>{content}</h3>
    </div>
  );
};

export default BoardUser;
