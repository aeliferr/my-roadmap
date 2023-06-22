import { Role, Prisma } from "@prisma/client";
import { prisma } from '../../../../../prisma/index'
import { RoleRepository } from "../IRroleRepository";

export class PrismaRoleRepository implements RoleRepository {
  findMany(findManyArgs: Prisma.RoleFindManyArgs): Promise<Role[]> {
    throw new Error("Method not implemented.");
  }

  async create(createArgs: Prisma.RoleCreateArgs): Promise<Role> {
    const entity = await prisma.role.create(createArgs)

    return entity
  }

  async find(findFirstArgs: Prisma.RoleFindFirstArgs): Promise<Role | null> {
    const entity = await prisma.role.findFirst(findFirstArgs)

    return entity
  }

}