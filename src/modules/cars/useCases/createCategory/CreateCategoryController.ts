import { Request, Response } from 'express';
import { Specification } from '../../entities/Specification';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

  constructor(private createCategoryUseCases: CreateCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body as Specification;

    await this.createCategoryUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };