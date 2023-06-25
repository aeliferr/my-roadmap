import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../prisma";
import { DeleteTrailRepository } from "../delete-trail-repository";

export class PrismaDeleteTrail implements DeleteTrailRepository {
  async execute(id: string): Promise<void> {
    const deleteParams = {
      where: {
        id
      }
    } as Prisma.TrailDeleteArgs
    
    await prisma.trail.delete(deleteParams)
  }
}