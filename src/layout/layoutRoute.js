import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

export default function LayoutRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  );
}

LayoutRoute.propTypes = {
  component: PropTypes.any.isRequired,
};
