import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { logout } from "../../actions/auth";
import "./style.css";

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo">Reporting System</div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {showAdminBoard && (
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={"/admin"} className="nav-link">
              Admin Board
            </Link>
          </Menu.Item>
        )}

        {currentUser && (
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </Menu.Item>
        )}

        {currentUser ? (
          <>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/profile" className="nav-link">
                {currentUser.username}
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              <Link href="/register" className="nav-link">
                SignUp
              </Link>
            </Menu.Item>
          </>
        )}

        {/*  <SubMenu key="sub1" icon={<GlobalOutlined />} title={t("links.language.header0")}>
              <Menu.Item icon={<TrIcon />} onClick={() => {i18next.changeLanguage('tr');}} key="6">{t("links.language.header1")}</Menu.Item>
              <Menu.Item icon={<EnIcon />} onClick={() => {i18next.changeLanguage('en');}} key="7">{t("links.language.header2")}</Menu.Item>
              <Menu.Item icon={<ArIcon />} onClick={() => {i18next.changeLanguage('ar');}} key="8">{t("links.language.header3")}</Menu.Item>
            </SubMenu> */}
      </Menu>
    </Sider>
  );
};

export default NavBar;
