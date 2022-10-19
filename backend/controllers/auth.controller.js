const argon2 = require("argon2");
const { ApiError } = require("../error/ApiError");
const { validateEmail } = require("../utils/validateEmail");
const { validatePassword } = require("../utils/validatePassword");
const { User } = require("../models/User");

const signup = async (req, res, next) => {
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

    let user = await User.findOne({ where: { email } });

    if (user) {
      throw ApiError.badRequest("This email already taken");
    }

    const hash = await argon2.hash(password);

    user = await User.create({ email, hash });

    return res.json({ email: user.email });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw ApiError.badRequest("Credentials incorrect");
    }

    const passwordMatches = await argon2.verify(user.hash, password);

    if (!passwordMatches) {
      throw ApiError.badRequest("Credentials incorrect");
    }

    return res.status(200).json({ email: user.email });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
