import { Prisma, Role } from "@prisma/client";
import { RoleRepository } from "../repositories/IRroleRepository";
import { z } from 'zod'

export class CreateRole {
  /**
   *
   */
  constructor(private roleRepository: RoleRepository<Prisma.RoleFindManyArgs>) {
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

    entity = await this.roleRepository.create(entity)

    return entity
  }
}