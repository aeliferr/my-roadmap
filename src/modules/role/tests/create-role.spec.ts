import { describe, expect, it, vi } from 'vitest'
import { CreateRoleRepository } from '../repositories/create-role-repository'
import { ZodError } from 'zod'
import { MockRole } from './mocks/mock-role'
import { v4 as uuidv4 } from 'uuid'
import { Role } from '../entities/Role'
import { CreateRoleFactory } from '../factories/create-role-factory'
import { MockRoleDTO } from './mocks/mock-role-dto'
import { CreateRoleDTO } from '../DTOs/create-role-dto'


describe('role tests', () => {
  it('should throw an error on null description', async () => {
    const createRoleRepository: CreateRoleRepository = {} as CreateRoleRepository 
    
    const dto = { ...MockRoleDTO.execute(), description: null as unknown as string } as CreateRoleDTO
    
    createRoleRepository.execute = vi.fn().mockReturnValue({ ...MockRole.execute(), id: uuidv4() } as Role)
    
    const createRole = CreateRoleFactory.create(createRoleRepository)
    
    const createRolePromise = createRole.execute(dto)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })

  it('should throw an error on undefined description', async () => {
    const createRoleRepository: CreateRoleRepository = {} as CreateRoleRepository 
    
    const dto = { ...MockRoleDTO.execute(), description: undefined as unknown as string } as CreateRoleDTO
    
    createRoleRepository.execute = vi.fn().mockReturnValue({ ...MockRole.execute(), id: uuidv4() } as Role)
    
    const createRole = CreateRoleFactory.create(createRoleRepository)
    
    const createRolePromise = createRole.execute(dto)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })
})