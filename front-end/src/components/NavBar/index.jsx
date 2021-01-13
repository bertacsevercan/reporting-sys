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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  const { t } = useTranslation();
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

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={showAdminBoard ? ["4"] : ["1"]}
      >
        {showAdminBoard && (
          <Menu.Item key="4" icon={<BookOutlined />}>
            <Link to={"/admin"} className="nav-link">
              {t("navbar.titles.title6")}
            </Link>
          </Menu.Item>
        )}

        {currentUser && (
          <Menu.Item key="1" icon={<BookOutlined />}>
            <Link to={"/user"} className="nav-link">
              {t("navbar.titles.title0")}
            </Link>
          </Menu.Item>
        )}
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/profile" className="nav-link">
            {currentUser.username + " " + t("navbar.titles.title1")}
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<GlobalOutlined />}
          title={t("navbar.titles.title2")}
        >
          <Menu.Item
            onClick={() => {
              i18next.changeLanguage("tr");
            }}
            key="5"
          >
            {t("navbar.titles.title3")}
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              i18next.changeLanguage("en");
            }}
            key="6"
          >
            {t("navbar.titles.title4")}
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          <a href="/login" className="nav-link" onClick={logOut}>
            {t("navbar.titles.title5")}
          </a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
