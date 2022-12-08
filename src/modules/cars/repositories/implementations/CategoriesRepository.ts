import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

  private repository = AppDataSource.getRepository(Category);

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const newCategory = this.repository.create({
      name,
      description
    });

    await this.repository.save(newCategory);

  }

  async list(): Promise<Category[]> {
    return await this.repository.find();

  }

  findByName(name: string): Promise<Category | null> {
    const category = this.repository.findOneBy({ name });
    return category;
  }

}

export { CategoriesRepository };