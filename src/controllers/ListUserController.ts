import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
    async index(request: Request, response: Response) {
        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        return response.status(200).json(users)
    }
}

export { ListUserController }