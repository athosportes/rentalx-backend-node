import { Request, Response } from 'express';
import { Specification } from '../../model/Specification';
import { CreateSpecifitaionService } from '../createSpecification/CreateSpecificationUseCase';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

  constructor(private createCategoryUseCases: CreateCategoryUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body as Specification;

    this.createCategoryUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };