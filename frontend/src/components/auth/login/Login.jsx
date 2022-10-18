import { Component } from "react";
import { withFormik } from "formik";
import { validateEmail, validatePassword } from "../../../common/utils";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      this.props;

    return (
      <Container maxWidth="xs">
        <Box sx={{ margin: "20px 0" }}>
          <Typography variant="h5">Login</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextField
              label="Email"
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
            />
            <Box sx={{ marginLeft: "auto" }}>
              <Link to="/auth/signup">
                <Button>Signup</Button>
              </Link>
              <Button type="submit">Login</Button>
            </Box>
          </Box>
        </form>
      </Container>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: (values) => {
    console.log(values);
  },
})(Login);
