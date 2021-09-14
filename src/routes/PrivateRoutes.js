
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../auth/index";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/users/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoutes;
