import 'reflect-metadata';
import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";

import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

import { UserRepository } from '../../modules/accounts/repositories/implementatios/UserRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)