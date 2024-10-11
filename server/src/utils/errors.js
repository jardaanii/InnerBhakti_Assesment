const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

class BadRequestError extends AppError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = {
  AppError,
  NotFoundError,
  BadRequestError,
};
