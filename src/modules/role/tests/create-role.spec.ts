import { describe, expect, it, vi } from 'vitest'
import { CreateRoleRepository } from '../repositories/create-role-repository'
import { ZodError } from 'zod'
import { RoleFactory } from './factories/role-factory'
import { v4 as uuidv4 } from 'uuid'
import { Role } from '../entities/Role'
import { CreateRoleFactory } from '../factories/create-role-factory'
import { CreateRoleDTOFactory } from './factories/create-role-dto-factory'
import { CreateRoleDTO } from '../DTOs/role-dto'


describe('role tests', () => {
  it('should throw an error on null description', async () => {
    const createRoleRepository: CreateRoleRepository = {} as CreateRoleRepository 
    
    const dto = { ...CreateRoleDTOFactory.create(), description: null as unknown as string } as CreateRoleDTO
    
    createRoleRepository.execute = vi.fn().mockReturnValue({ ...RoleFactory.create(), id: uuidv4() } as Role)
    
    const createRole = CreateRoleFactory.create(createRoleRepository)
    
    const createRolePromise = createRole.execute(dto)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })

  it('should throw an error on undefined description', async () => {
    const createRoleRepository: CreateRoleRepository = {} as CreateRoleRepository 
    
    const dto = { ...CreateRoleDTOFactory.create(), description: undefined as unknown as string } as CreateRoleDTO
    
    createRoleRepository.execute = vi.fn().mockReturnValue({ ...RoleFactory.create(), id: uuidv4() } as Role)
    
    const createRole = CreateRoleFactory.create(createRoleRepository)
    
    const createRolePromise = createRole.execute(dto)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })
})