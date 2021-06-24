import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import { ErrorHandler } from "../err/errorhandlers";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    password: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, password, email, admin}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
        
        if(!name) {
            const err = {
                name: "userNameError",
                message: "Incorrect name!",
                description: "Name Field cannot be empty",
                statusCode: 400
            }
            throw new ErrorHandler(err);
        };

        if(!email) {
            const err = {
                name: "userNameError",
                message: "Incorrect email!",
                description: "E-mail Field cannot be empty",
                statusCode: 400
            }
            throw new ErrorHandler(err);
        };

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            const err = {
                name: "userNameError",
                message: "User already registered!",
                description: "User is already registered. Please inform another user",
                statusCode: 409
            }
            throw new ErrorHandler(err);
        }

        const passwordHash = await hash(password, 8);
        const user = usersRepository.create({
            name, 
            password: passwordHash, 
            email, 
            admin
        });

        await usersRepository.save(user);

        delete user.password;
        
        return user;
    }
}

export { CreateUserService }