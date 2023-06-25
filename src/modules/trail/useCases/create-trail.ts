import { z } from "zod";
import { CreateTrailDTO } from "../DTOs/create-trail-dto";
import { Trail } from "../entities/Trail";
import { CreateTrailRepository } from "../repositories/create-trail-repository";

export class CreateTrail {
  /**
   *
   */
  constructor(private createTrailRepository: CreateTrailRepository) {
    
  }

  async execute(entity: CreateTrailDTO): Promise<Trail> {
    const trailSchemaValidator = z.object({
      description: z.string()
    })

    try {
      await trailSchemaValidator.parseAsync(entity)
    } catch (error) {
      console.error(error)
      throw error
    }

    const trail = await this.createTrailRepository.create(entity)

    return trail
  }
}