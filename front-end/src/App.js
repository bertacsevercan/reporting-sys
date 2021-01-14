import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import "antd/dist/antd.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import { Layout } from "antd";
import NavBar from "./components/NavBar";
import Report from "./containers/Report";

const { Content, Footer } = Layout;

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Router history={history}>
          <Layout>
            {currentUser ? <NavBar /> : null}
            <Layout className="layout">
              <Content>
                <div className="site-layout-content">
                  <Switch>
                    <Route exact path={["/", "/login"]} component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/user" component={BoardUser} />
                    <Route path="/admin" component={BoardAdmin} />
                    <Route path="/report" component={Report} />
                  </Switch>
                </div>
              </Content>
              <Footer id="footer">
                Reporting-System ©2021 Created by{" "}
                <strong>Bertaç Severcan</strong>
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </div>
    </I18nextProvider>
  );
}

export default App;
