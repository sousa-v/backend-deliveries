import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticateClient/AuthenticateClientController";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router()

const authenticateClientController = new AuthenticateUserController()
const createClientController = new CreateClientController()

routes.post("/authenticate", authenticateClientController.handle)
routes.post("/client", createClientController.handle)

export { routes }