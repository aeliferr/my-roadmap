import { faker } from '@faker-js/faker'
import { CreateRoleDTO } from '../../DTOs/create-role-dto'

export class MockRoleDTO {
  static execute(): CreateRoleDTO {
    return {
      description: faker.lorem.word(15)
    } as CreateRoleDTO
  }
}