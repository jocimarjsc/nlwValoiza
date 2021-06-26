import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../err/errorhandlers";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated( request: Request, response: Response, next: NextFunction ) {
	const authToken = request.headers.authorization;

    if(!authToken) {
        const err = {
            name: "tokenError",
            message: "Token is required!",
            description: "You didn't send the token",
            statusCode: 401
        }
        throw new ErrorHandler(err);
    };

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.SECRET) as IPayload;

        request.user_id = sub;
        
        return next();
    } catch (error) {
        const err = {
            name: "tokenError",
            message: "Token is incorrect!",
            description: "Your token is incorrect",
            statusCode: 401
        }
        throw new ErrorHandler(err);
    }
}
