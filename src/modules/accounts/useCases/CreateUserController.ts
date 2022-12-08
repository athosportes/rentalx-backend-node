
import { Request } from 'express';
import { Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password, driverLicense } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ 
      name,
      username,
      email,
      password,
      driverLicense
    });

    return res.status(201).send();
    
  }
}

export { CreateUserController };