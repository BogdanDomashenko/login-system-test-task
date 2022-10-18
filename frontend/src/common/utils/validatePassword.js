const validatePassword = (password) => {
  return (
    password &&
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;:,])[\w!@#$%^&*;:,]{8,}$/.test(
      password
    )
  );
};

export default validatePassword;
