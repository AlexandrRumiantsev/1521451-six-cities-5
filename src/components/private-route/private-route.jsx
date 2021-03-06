import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {UserType, AppRoute} from "../../store/const";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === UserType.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.User.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
