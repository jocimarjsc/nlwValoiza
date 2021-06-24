import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../err/errorhandlers";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    messages: string;
};

class CreateComplimentService {
    async execute({ tag_id, user_receiver, user_sender, messages }: IComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const usersRepository = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver) {
            const err = {
                name: "userError",
                message: "User conflict!",
                description: "You can't send to yourself",
                statusCode: 400
            }
            throw new ErrorHandler(err);
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver);

        if(!userReceiverExists) {
            const err = {
                name: "userReceiverError",
                message: "User not found!",
                description: "User receiver does not exists!",
                statusCode: 404
            }
            throw new ErrorHandler(err);
        };

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            messages
        })

        await complimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }