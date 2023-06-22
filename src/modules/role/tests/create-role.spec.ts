import { describe, expect, it, vi } from 'vitest'
import { Prisma, Role } from '@prisma/client'
import { CreateRole } from '../useCases/create-role'
import { RoleRepository } from '../repositories/IRroleRepository'
import { ZodError } from 'zod'


describe('role tests', () => {
  it('should throw an error on null description', async () => {
    const roleRepository: RoleRepository<Prisma.RoleFindManyArgs> = {} as RoleRepository<Prisma.RoleFindManyArgs> 
    roleRepository.find = vi.fn().mockReturnValue({ id: 1 })
    
    const createRole = new CreateRole(roleRepository)
    
    const createRolePromise = createRole.execute({ description: null as unknown as string } as Role)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })

  it('should throw an error on undefined description', async () => {
    const roleRepository: RoleRepository<Prisma.RoleFindManyArgs> = {} as RoleRepository<Prisma.RoleFindManyArgs> 
    roleRepository.find = vi.fn().mockReturnValue({ id: 1 })
    
    const createRole = new CreateRole(roleRepository)
    
    const createRolePromise = createRole.execute({ description: null as unknown as string } as Role)
    
    expect(createRolePromise).rejects.toThrow(ZodError)
  })
})