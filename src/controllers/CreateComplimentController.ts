import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
    async create(request: Request, response: Response) {
        const { tag_id, user_receiver, messages} = request.body;
        const { user_id } = request

        const createCompleimentService = new CreateComplimentService();
        
        const compliment = await createCompleimentService.execute({
            tag_id,
            user_sender: user_id,
            user_receiver,
            messages
        });
        
        return response.status(201).json(compliment)
    }
}

export { CreateComplimentController }