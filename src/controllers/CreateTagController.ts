import { Request, Response } from "express";
import { CreateTagsService } from "../services/CreateTagService";

class CreateTagController {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        const createTagService = new CreateTagsService();

        const tag = await createTagService.exectute(name);

        return response.status(201).json(tag)
    }
}

export { CreateTagController }