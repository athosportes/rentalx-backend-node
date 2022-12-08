
import { IUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../IUserRepository';
import { AppDataSource } from '../../../../data-source';
import { User } from '../../entities/User';
import { Repository } from 'typeorm';

export class UserRepository implements IUserRepository {

  private repository: Repository<User> = AppDataSource.getRepository(User)
  
  async create(data: IUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name: data.name,
      password: data.password,
      username: data.username,
      email: data.email,
      driverLicense: data.driverLicense,
    });

    await this.repository.save(newUser);
  }


}