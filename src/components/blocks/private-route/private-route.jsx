import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "const.js";
import {getAuthorizationStatus} from "store/user-data/selector";

const PrivateRoute = (props) => {
  const {authorizationStatus, render} = props;
  const isLogined = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <Route
      {...props}
      render={(routeProps) => (
        isLogined ? render(routeProps) : <Redirect to="/login"/>
      )}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH
  ]).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
