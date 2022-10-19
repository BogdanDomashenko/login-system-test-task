import { Component } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import { login } from "../../../store/actions/auth.action";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Loader } from "../../ui";

class Login extends Component {
  render() {
    const {
      values,
      errors,
      touched,
      handleSubmit,
      handleChange,
      handleBlur,
      isLoading,
    } = this.props;

    return (
      <Container maxWidth="xs">
        <Box sx={{ margin: "20px 0" }}>
          <Typography variant="h5">Login</Typography>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <TextField
                label="Email"
                type="email"
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
                <Link to="/auth/register">
                  <Button>Register</Button>
                </Link>
                <Button type="submit">Login</Button>
              </Box>
            </Box>
          </form>
        )}
      </Container>
    );
  }
}

const LoginFormik = withFormik({
  mapPropsToValues: (props) => ({
    email: props.registeredEmail || "",
    password: "",
  }),
  handleSubmit: (values, { props }) => {
    props.login(values.email, values.password);
  },
})(Login);

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  registeredEmail: state.auth.registeredEmail,
});

export default connect(mapStateToProps, { login })(LoginFormik);
