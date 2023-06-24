import { faker } from '@faker-js/faker'
import { Role } from '../../entities/Role'

export class MockRole {
  static execute(): Role {
    const role = new Role()
    role.description = faker.lorem.word(15)
    return role
  }
}