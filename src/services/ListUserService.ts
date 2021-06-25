import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../err/errorhandlers";
import { UsersRepositories } from "../repositories/UsersRepositories"

class ListUserService {
    async execute() {
        const userRepository = getCustomRepository(UsersRepositories);

        const users = await userRepository.find();

        if(users.length === 0) {
            const err = {
                name: "userError",
                message: "Not found users",
                description: "Unfortunately, no users were found.",
                statusCode: 404
            }
            throw new ErrorHandler(err);
        }

        users.forEach(user =>{
            delete user.password
        });

        return users;
    }
}

export { ListUserService }