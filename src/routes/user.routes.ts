
import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const userRoutes = Router();

const createUserControler = new CreateUserController();

userRoutes.post('/', createUserControler.handle);

export { userRoutes };