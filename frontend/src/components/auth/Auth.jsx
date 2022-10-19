import { Component } from "react";
import { connect } from "react-redux";
import { setAuthError } from "../../store/actions/auth.action";
import { Alert, Snackbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Loader } from "../ui";

class Auth extends Component {
  handleErrorMessageClose() {
    this.props.setAuthError(null);
  }

  render() {
    const { isLoading, authError } = this.props;

    return (
      <div>
        <Outlet />
        <Snackbar
          open={!!authError}
          onClose={this.handleErrorMessageClose}
          autoHideDuration={6000}
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
  authError: state.auth.error,
});

export default connect(mapStateToProps, { setAuthError })(Auth);
