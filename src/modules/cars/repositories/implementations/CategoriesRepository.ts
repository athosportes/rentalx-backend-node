import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(Category)
class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor(){
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    });

    await this.repository.save(category);

  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const categoryByName = await this.repository.findOne({ name });
    return categoryByName;
  }

}

export { CategoriesRepository };