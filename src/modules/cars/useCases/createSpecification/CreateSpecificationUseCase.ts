import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject('SpecificationsRepository')
    private specificationCategory: ISpecificationsRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationCategory.findByname(name);

    if (specificationAlreadyExists)
      throw new Error('Specification already exists!');

    this.specificationCategory.create({ name, description });

  }

}

export { CreateSpecificationUseCase };