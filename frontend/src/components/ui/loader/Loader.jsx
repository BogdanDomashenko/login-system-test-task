import { CircularProgress } from "@mui/material";
import { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  }
}

export default Loader;
