import { PrismaRoleRepository } from "../repositories/prisma/PrismaRoleRepository";
import { CreateFullAccessRole } from "../useCases/create-full-access-role";

export class CreateFullAccesRoleFactory {
  static executa(){
    return new CreateFullAccessRole(new PrismaRoleRepository(), new PrismaRouteRepository())
  }
}