import { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/auth.action";
import { Box, List, ListItem, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const navigationItems = [
  { name: "Home", to: "/" },
  { name: "Profile", to: "/profile", mustBeAuthorized: true },
];

class Navigation extends Component {
  handleLogoutClick = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    const authorized = !!user.data.email;

    return (
      <Box sx={{ backgroundColor: blue[400] }} justifyContent="flex-end">
        <List>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            {navigationItems?.map((item, index) =>
              !item.mustBeAuthorized ||
              (item.mustBeAuthorized && authorized) ? (
                <Link key={index} to={item.to}>
                  <Button sx={{ color: "white" }}>{item.name}</Button>
                </Link>
              ) : (
                ""
              )
            )}
            {authorized ? (
              <Button sx={{ color: "white" }} onClick={this.handleLogoutClick}>
                Logout
              </Button>
            ) : (
              <Link to="/auth/login">
                <Button sx={{ color: "white" }}>Login</Button>
              </Link>
            )}
          </ListItem>
        </List>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Navigation);
