import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {

  constructor(private specificationCategory: ISpecificationsRepository) {
    this.specificationCategory = specificationCategory;
  }

  execute({ name, description }): void {
    const specificationAlreadyExists = this.specificationCategory.findByname(name);

    if (specificationAlreadyExists)
      throw new Error('Specification already exists!');

    this.specificationCategory.create({ name, description });

  }

}

export { CreateSpecificationUseCase };