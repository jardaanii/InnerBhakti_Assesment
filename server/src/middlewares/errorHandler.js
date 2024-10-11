const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  if (err.name === "CastError") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: "fail",
      message: "Invalid ID format",
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: "fail",
      message: messages.join(". "),
    });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: "Something went wrong",
  });
};

module.exports = errorHandler;
