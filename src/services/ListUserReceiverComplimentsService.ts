import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../err/errorhandlers";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";

class ListUserReceiverComplimentsService {
    async execute(user_id: string) {
        const complimentsReposotory= getCustomRepository(ComplimentsRepository);

        const compliments = await complimentsReposotory.find({
            where: {
                user_receiver: user_id
            },
            relations: [ "userSender", "userReceiver", "tag" ]
        });

        compliments.forEach(compliment => {
            delete compliment.userSender.password;
            delete compliment.userSender.admin;
        });

        if(compliments.length === 0) {
            const err = {
                name: "complimentsReceiverError",
                message: "Not found compliments",
                description: "Unfortunately, no compliments were found.",
                statusCode: 404
            }
            throw new ErrorHandler(err);
        }

        return compliments;
    };
}

export { ListUserReceiverComplimentsService }