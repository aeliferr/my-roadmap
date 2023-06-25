import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../prisma";
import { CreateRoleDTO } from "../../DTOs/create-role-dto";
import { Role } from "../../entities/Role";

import { CreateRoleRepository } from "../create-role-repository";

export class PrismaCreateRoleRepository implements CreateRoleRepository {
  async execute(entity: CreateRoleDTO): Promise<Role> {
    const createParams: Prisma.RoleCreateArgs = {
      data: {
        ...entity
      } as Prisma.RoleCreateInput
    }

    const role = await prisma.role.create(createParams)

    return role as Role
  }

}