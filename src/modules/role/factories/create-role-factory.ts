import { CreateRoleRepository } from "../repositories/create-role-repository";
import { CreateRoleUseCase } from "../useCases/create-role";

export class CreateRoleFactory {
  static create(createRoleRepository: CreateRoleRepository) {
    return new CreateRoleUseCase(createRoleRepository)
  }
}