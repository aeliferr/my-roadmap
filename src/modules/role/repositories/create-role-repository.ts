import { CreateRoleDTO } from "../DTOs/CreateRoleDTO";
import { Role } from "../entities/Role";

export interface CreateRoleRepository {
  execute(entity: CreateRoleDTO): Promise<Role>
}