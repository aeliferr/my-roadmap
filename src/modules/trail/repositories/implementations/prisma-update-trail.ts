import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../prisma";
import { UpdateTrailDTO } from "../../DTOs/update-trail-dto";
import { Trail } from "../../entities/Trail";
import { UpdateTrailRepository } from "../update-trail-repository";

export class PrismaUpdateTrail implements UpdateTrailRepository {
  async execute(entity: UpdateTrailDTO): Promise<Trail> {
    const updateParams = {
      data: { ...entity }
    } as Prisma.TrailUpdateArgs
    
    const trail = await prisma.trail.update(updateParams)

    return trail
  }
}