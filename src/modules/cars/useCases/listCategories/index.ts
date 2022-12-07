import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(listCategoryUseCase);
  return listCategoriesController;
}
