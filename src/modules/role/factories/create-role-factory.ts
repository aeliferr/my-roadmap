import { CreateRoleRepository } from "../repositories/create-role-repository";
import { CreateRole } from "../useCases/create-role";

export class CreateRoleFactory {
  static create(createRoleRepository: CreateRoleRepository) {
    return new CreateRole(createRoleRepository)
  }
}