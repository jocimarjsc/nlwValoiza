import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../err/errorhandlers";
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagsService {
    async exectute(name: string) {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if(!name) {
            const err = {
                name: "tagNameError",
                message: "Incorrect name!",
                description: "Name Field cannot be empty",
                statusCode: 400
            }
            throw new ErrorHandler(err);
        }

        const TagAlreadyExists = await tagsRepository.findOne({ name });

        if(TagAlreadyExists) {
            const err = {
                name: "tagNameError",
                message: "Tag already registered!",
                description: "Tag is already registered. Please inform another tag",
                statusCode: 409
            }
            throw new ErrorHandler(err);
        }

        const tag = tagsRepository.create({ name });

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagsService }