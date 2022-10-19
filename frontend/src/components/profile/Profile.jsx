import { Container, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <Container sx={{ marginTop: "20px" }}>
        <Typography variant="h5">Email: {user.data.email}</Typography>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);
