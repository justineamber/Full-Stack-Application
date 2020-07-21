import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedLogin } from "./Login";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { Redirect } from "react-router";
import { ConnectedSignup } from "./Signup";

const RouteGuard = Component => ({ match }) => {
  !store.getState().session.authenticated ? (
    <Redirect to="/" />
  ) : (
    <Component match={match} />
  );
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div className="container mt-3">
        <ConnectedNavigation />
        <Route exact path="/" component={ConnectedLogin} />
        <Route exact path="/signup" component={ConnectedSignup} />
        <Route
          exact
          path="/dashboard"
          render={RouteGuard(ConnectedDashboard)}
        />
        <Route
          exact
          path="/task/:id"
          render={RouteGuard(ConnectedTaskDetail)}
        />
      </div>
    </Provider>
  </Router>
);
