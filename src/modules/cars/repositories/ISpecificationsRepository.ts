import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByname(name: string): Promise<Specification | null>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };