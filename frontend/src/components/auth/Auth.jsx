import { Component } from "react";
import { Outlet } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default Auth;