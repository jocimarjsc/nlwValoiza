import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

const listUserController = new ListUserController();
const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();

const listTagsController = new ListTagsController();
const createTagController = new CreateTagController();

const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

routes.get("/users", ensureAuthenticated, listUserController.index)
routes.post("/users", createUserController.create);

routes.post("/login", authenticateUserController.authenticate);

routes.get("/tags", ensureAuthenticated, listTagsController.index)
routes.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.create);

routes.post("/compliments", ensureAuthenticated, createComplimentController.create);
routes.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.index);
routes.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.index);

export { routes }