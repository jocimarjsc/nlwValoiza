import { Request, Response } from "express";
import { ListTagsSevice } from "../services/ListTagsService";

class ListTagsController {
    async index(request: Request, response: Response) {
        const listTagsService = new ListTagsSevice();

        const tags = await listTagsService.execute();

        return response.status(200).json(tags);
    }
}

export { ListTagsController }