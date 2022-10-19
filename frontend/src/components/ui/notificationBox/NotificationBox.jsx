import { Alert, Snackbar } from "@mui/material";
import { Component } from "react";

class NotificationBox extends Component {
  render() {
    return (
      <Snackbar
        open={!!this.props.message}
        onClose={this.props.onClose}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={this.props.severity} sx={{ width: "100%" }}>
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

export default NotificationBox;
