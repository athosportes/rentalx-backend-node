import { IUserDTO } from "../dtos/ICreateUserDTO";
import { AppDataSource } from '../../../data-source';
import { User } from "../entities/User";
import { inject, injectable } from "tsyringe";
import constructor from '../../../../node_modules/tsyringe/dist/typings/types/constructor.d';
import { UserRepository } from '../repositories/implementatios/UserRepository';
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository ) { }

  async execute(data: IUserDTO): Promise<void> {
    this.userRepository.create(data);
  }

}

export { CreateUserUseCase };