import { Permission, Prisma, Role, Route } from "@prisma/client";
import { RoleRepository } from "../repositories/IRroleRepository";
import { z } from 'zod'
import { RouteRepository } from "../../routes/repositories/IRouteRepository";

export class CreateFullAccessRole {
  /**
   *
   */
  constructor(private roleRepository: RoleRepository, private routeRepository: RouteRepository) {
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

    type x = keyof Route
    type s = x["id"] 
    const routes = await this.routeRepository.findMany("id", '')

    const permissions = routes.map(route => {
      return {
        routeId: route.id
      } as Permission
    })

    entity = await this.roleRepository.create({
      data: {
        ...entity,
        Permission: {
          createMany: {
            data: permissions
          }
        }
      }
    })

    return entity
  }
}