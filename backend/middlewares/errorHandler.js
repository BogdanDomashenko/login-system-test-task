const { ApiError } = require("../error/ApiError");

const errorHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({ error: error.message });
  }
  console.log(error);
  return res.status(500).json({ message: "Unexpected error" });
};

module.exports = { errorHandler };
