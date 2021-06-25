import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../err/errorhandlers";
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"; 

class ListTagsSevice {
    async execute() {
        const tagsRepository = getCustomRepository(TagsRepositories);

        const tags = await tagsRepository.find();

        if(tags.length === 0) {
            const err = {
                name: "tagsError",
                message: "Not found tags",
                description: "Unfortunately, no tags were found.",
                statusCode: 404
            }
            throw new ErrorHandler(err);
        }

        return classToPlain(tags);
    }
}

export { ListTagsSevice }