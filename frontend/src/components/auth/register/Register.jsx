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

class Register extends Component {
  render() {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      this.props;

    return (
      <Container maxWidth="xs">
        <Box sx={{ margin: "20px 0" }}>
          <Typography variant="h5">Register</Typography>
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
              <Link to="/auth/login">
                <Button>Login</Button>
              </Link>
              <Button type="submit">Register</Button>
            </Box>
          </Box>
        </form>
      </Container>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validate: (values) => {
    const errors = {};

    if (!validateEmail(values.email)) {
      errors.email = "Value should be email";
    }

    if (!validatePassword(values.password)) {
      errors.password =
        "Should contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special symbol";
    }

    return errors;
  },
  handleSubmit: (values) => {
    console.log(values);
  },
})(Register);
