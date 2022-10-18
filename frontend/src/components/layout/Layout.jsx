import { Component } from "react";
import Navigation from "./navigation/Navigation";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
