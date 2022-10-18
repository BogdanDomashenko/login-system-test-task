import { Component } from "react";
import { Box, List, ListItem, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const navigationItems = [
  { name: "Home", to: "/" },
  { name: "Login", to: "/auth/login" },
];

class Navigation extends Component {
  render() {
    return (
      <Box sx={{ backgroundColor: blue[400] }} justifyContent="flex-end">
        <List>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            {navigationItems?.map((item, index) => (
              <Link key={index} to={item.to}>
                <Button sx={{ color: "white" }}>{item.name}</Button>
              </Link>
            ))}
          </ListItem>
        </List>
      </Box>
    );
  }
}

export default Navigation;
