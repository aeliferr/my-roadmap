import { CreateFullAccessRoleDTO } from "../DTOs/CreateFullAccessRoleDTO";
import { Role } from "../entities/Role";

export interface CreateFullAccessRoleRepository {
  execute(dto: CreateFullAccessRoleDTO): Promise<Role>
}