import { Component } from "react";
import { connect } from "react-redux";
import {
  setAuthError,
  setAuthSuccessMessage,
} from "../../store/actions/auth.action";
import { Alert, Snackbar } from "@mui/material";
import { Outlet } from "react-router-dom";

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
        <Snackbar
          open={!!successMessage}
          onClose={this.handleSuccessMessageClose}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            {successMessage}
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!authError}
          onClose={this.handleErrorMessageClose}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            {authError}
          </Alert>
        </Snackbar>
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
