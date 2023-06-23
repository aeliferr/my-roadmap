import { z } from 'zod'
import { CreateRole } from '../DTOs/CreateRole'
import { Role } from '../entities/Role'
import { CreateRoleRepository } from '../repositories/create-role-repository'

export class CreateRoleUseCase {
  /**
   *
   */
  constructor(private roleRepository: CreateRoleRepository) {
  }

  async execute(entity: CreateRole): Promise<Role> {
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

    const role = await this.roleRepository.execute(entity)

    return role
  }
}