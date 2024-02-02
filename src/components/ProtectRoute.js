import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../services/customer/authentication/auth_service";

function ProtectRoute({ component: Component, ...rest }) {
  return (
    <Route>
      {...rest}
      render=
      {(props) => {
        if (authService.isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="login" />;
        }
      }}
    </Route>
  );
}

export default ProtectRoute;
