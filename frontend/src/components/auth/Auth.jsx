import { Component } from "react";
import { connect } from "react-redux";
import {
  setAuthError,
  setAuthSuccessMessage,
} from "../../store/actions/auth.action";
import { Alert, Snackbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NotificationBox } from "../ui";

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  handleErrorMessageClose = () => {
    this.props.setAuthError(null);
  };

  handleSuccessMessageClose = () => {
    this.props.setAuthSuccessMessage(null);
  };

  render() {
    const { successMessage, authError } = this.props;

    return (
      <div>
        <Outlet />
        <NotificationBox
          open={!!successMessage}
          onClose={this.handleSuccessMessageClose}
          severity="success"
          message={successMessage}
        />
        <NotificationBox
          open={!!authError}
          onClose={this.handleErrorMessageClose}
          severity="error"
          message={authError}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  successMessage: state.auth.successMessage,
  authError: state.auth.error,
});

export default connect(mapStateToProps, {
  setAuthSuccessMessage,
  setAuthError,
})(Auth);
