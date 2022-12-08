import { AppDataSource } from "../../../../data-source";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
  private repository = AppDataSource.getRepository(Specification);

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const newSpecification = this.repository.create({
        name,
        description
      });

      await this.repository.save(newSpecification);
    }

    async findByname(name: string): Promise<Specification | null> {
      return await this.repository.findOneBy({ name });
    }

}

export { SpecificationsRepository };