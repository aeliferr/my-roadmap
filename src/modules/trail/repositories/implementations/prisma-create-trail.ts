import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../prisma";
import { CreateTrailDTO } from "../../DTOs/create-trail-dto";
import { Trail } from "../../entities/Trail";
import { CreateTrailRepository } from "../create-trail-repository";

export class PrismaCreateTrail implements CreateTrailRepository {
  async create(entity: CreateTrailDTO): Promise<Trail> {
    const createParams = {
      data: { ...entity }
    } as Prisma.TrailCreateArgs
    
    const trail = await prisma.trail.create(createParams)

    return trail
  }
}