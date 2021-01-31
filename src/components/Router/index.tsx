import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import * as H from "history";

interface AuthRouteProps extends RouteProps {
  isAuth: boolean;
  to?: H.LocationDescriptor<any>;
}

export const AuthRoute = (props: AuthRouteProps) =>
  props.isAuth ? (
    <Route {...props}></Route>
  ) : (
    <Redirect to={props.to || "/"}></Redirect>
  );

export const NonAuthRoute = (props: AuthRouteProps) => (
  <AuthRoute {...props} isAuth={!props.isAuth} />
);
