import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";

import "antd/dist/antd.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import { Layout } from "antd";
import NavBar from "./components/NavBar";

const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router history={history}>
        <Layout>
          <NavBar />
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-content"
                style={{ padding: 24, minHeight: "88vh" }}
              >
                <Switch>
                  <Route exact path={["/", "/login"]} component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  <Route path="/user" component={BoardUser} />
                  <Route path="/admin" component={BoardAdmin} />
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Reporting-System ©2021 Created by Bertaç Severcan
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
