import { faker } from '@faker-js/faker'
import { CreateRoleDTO } from '../../DTOs/CreateRoleDTO'

export class CreateRoleDTOFactory {
  static create(): CreateRoleDTO {
    return {
      description: faker.lorem.word(15)
    } as CreateRoleDTO
  }
}