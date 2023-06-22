import { Role, Prisma } from "@prisma/client";
import { CRUDepository } from "../../../common/interfaces/ICRUDRepository";

export interface RoleRepository extends CRUDepository<Role, Prisma.RoleCreateArgs, Prisma.RoleFindFirstArgs, Prisma.RoleFindManyArgs> {

}