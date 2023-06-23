import { Permission, Prisma, Role, Route } from "@prisma/client";
import { RoleRepository } from "../repositories/IRroleRepository";
import { z } from 'zod'
import { RouteRepository } from "../../routes/repositories/IRouteRepository";
import { CreateFullAccessRoleRepository } from "../repositories/create-full-access-role-repository copy";

export class CreateFullAccessRole {
  /**
   *
   */
  constructor(private createFullAccessRoleRepository: CreateFullAccessRoleRepository, private routeRepository: RouteRepository) {
  }

  async execute(entity: Role): Promise<Role> {
    const roleSchemaValidator = z.object({
      description: z.string({
        description: 'The role description',
        required_error: 'The role description must be provided'
      })
    })
    
    try {
      await roleSchemaValidator.parseAsync(entity)
    } catch (error) {
      throw error
    }
    
    const routes = await this.routeRepository.findMany(['id'])

    const permissions = routes.map(route => {
      return {
        routeId: route.id
      } as Permission
    })

    entity = await this.roleRepository.create(entity, permissions)

    return entity
  }
}