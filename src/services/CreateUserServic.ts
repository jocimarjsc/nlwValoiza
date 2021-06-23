import { getCustomRepository } from "typeorm";
import { ErrorHandler } from "../err/errorhandlers";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin}: IUserRequest) {
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

        const user = usersRepository.create({
            name, email, admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }