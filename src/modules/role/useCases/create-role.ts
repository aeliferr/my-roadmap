import { z } from 'zod'
import { CreateRoleDTO} from '../DTOs/create-role-dto'
import { Role } from '../entities/Role'
import { CreateRoleRepository } from '../repositories/create-role-repository'

export class CreateRole {
  /**
   *
   */
  constructor(private roleRepository: CreateRoleRepository) {
  }

  async execute(entity: CreateRoleDTO): Promise<Role> {
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