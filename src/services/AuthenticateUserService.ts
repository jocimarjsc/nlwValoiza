import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { ErrorHandler } from "../err/errorhandlers";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
};

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({ email });

        if(!user) {
            const err = {
                name: "Email/PasswordError",
                message: "E-mail/Password incorrect!",
                description: "Enter your Email or Password correct!",
                statusCode: 400
            }
            throw new ErrorHandler(err)
        };

        const passwordmatch = await compare(password, user.password);

        if(!passwordmatch) {
            const err = {
                name: "Email/PasswordError",
                message: "E-mail/Password incorrect!",
                description: "Enter your Email or Password correct!",
                statusCode: 400
            }
            throw new ErrorHandler(err)
        };

        const token = sign({
            email: user.email
        }, "af12149c4d04fb5a748ab576758a5bc1", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }