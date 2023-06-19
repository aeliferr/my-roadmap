import { describe, expect, it } from 'vitest'
import supertest from 'supertest'
import { app } from '../../../src'
import { Role } from '@prisma/client'
import { faker } from '@faker-js/faker'

const request = supertest(app)

describe('role tests', () => {
  it('should create a role', async () => {

    const response = await request.post('/roles').send({
      description: faker.person.fullName()
    } as Role)

    expect(response.statusCode).toBe(200)
  })

  it('should create a full access role', async () => {

    const response = await request.post('/roles?fullAccess=true').send({
      description: faker.person.fullName()
    } as Role)

    expect(response.statusCode).toBe(200)
  })
})