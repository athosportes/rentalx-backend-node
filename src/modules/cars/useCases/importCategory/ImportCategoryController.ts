import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
class ImportCategoryController {

  handle(request: Request, response: Response): Response {
    const file = request as unknown as Express.Multer.File;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    importCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };