const { ApiError } = require("../error/ApiError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ error: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: "Unexpected error" });
};

module.exports = { errorHandler };
