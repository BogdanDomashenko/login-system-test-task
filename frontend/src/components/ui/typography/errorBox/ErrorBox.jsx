import { Box, Typography } from "@mui/material";
import { Component } from "react";

class ErrorBox extends Component {
  render() {
    return (
      <Box sx={{ marginTop: "10px" }}>
        <Typography variant="p" sx={{ color: "error.main" }}>
          {this.props.children}
        </Typography>
      </Box>
    );
  }
}

export default ErrorBox;
