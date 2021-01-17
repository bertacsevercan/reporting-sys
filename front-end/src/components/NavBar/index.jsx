import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  GlobalOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { logout } from "../../actions/auth";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  const { t } = useTranslation();
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo">Reporting System</div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys="1">
        <Menu.Item key="1" icon={<AreaChartOutlined />}>
          <Link to="/report" className="nav-link">
            Report
          </Link>
        </Menu.Item>
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
