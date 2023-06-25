import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../prisma";
import { Trail } from "../../entities/Trail";
import { GetTrailRepository } from "../get-trail-repository";

export class PrismaGetTrail implements GetTrailRepository {
  async execute(id: string): Promise<Trail | null> {
    const findUniqueParams = {
      where: {
        id
      }
    } as Prisma.TrailFindUniqueArgs
    
    const trail = await prisma.trail.findUnique(findUniqueParams)

    return trail
  }
}