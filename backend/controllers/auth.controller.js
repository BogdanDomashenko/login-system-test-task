const { ApiError } = require("../error/ApiError");
const { validateEmail } = require("../utils/validateEmail");
const { validatePassword } = require("../utils/validatePassword");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validationErrors = [];

    if (!validateEmail(email)) {
      validationErrors.push("'email' should be email");
    }

    if (!validatePassword(password)) {
      validationErrors.push(
        "password' should contains at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special symbol"
      );
    }

    if (validationErrors.length) {
      throw ApiError.badRequest(validationErrors);
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
