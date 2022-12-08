import { IUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository{

  create(data: IUserDTO): Promise<void>;
}

export { IUserRepository };