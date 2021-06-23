import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "./errorhandlers";

class CaptureError {
  async execute( err: ErrorHandler, request: Request, response: Response, next: NextFunction ) {
    if (err instanceof Error) {
      const { name, statusCode, description, message } = err;
      return response.status(statusCode).json({ name, message, description });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
}

export { CaptureError };
