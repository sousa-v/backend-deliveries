import { Router } from "express";

import { AuthenticateUserController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const authenticateClientController = new AuthenticateUserController()
const createClientController = new CreateClientController()
const createDeliverymanController =  new CreateDeliverymanController()

routes.post("/authenticate", authenticateClientController.handle)
routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)

export { routes }