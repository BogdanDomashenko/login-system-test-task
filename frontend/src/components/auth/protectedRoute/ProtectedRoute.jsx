import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { user, children, mustBeNotAuthorized } = this.props;

    if (mustBeNotAuthorized && user.data.email) {
      return <Navigate to="/" replace />;
    }

    if (!mustBeNotAuthorized && !user.data.email) {
      return <Navigate to="/auth/login" replace />;
    }

    return children;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
