import { Component } from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import { register } from "../../../store/actions/auth.action";
import { validateEmail, validatePassword } from "../../../common/utils";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Loader, ErrorBox } from "../../ui";
import { withRouter } from "../../../common/hocs";

class Register extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.registeredEmail !== prevProps.registeredEmail) {
      this.props.router.navigate("/auth/login");
    }
  }

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
          <Typography variant="h5">Register</Typography>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </Container>
    );
  }
}

const RegisterWithRouter = withRouter(Register);

const RegisterWithFormik = withFormik({
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
  handleSubmit: (values, { props }) => {
    props.register(values.email, values.password);
  },
})(RegisterWithRouter);

const mapStateToProps = (state) => ({
  registeredEmail: state.auth.registeredEmail,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { register })(RegisterWithFormik);
