import { z } from "zod";
import { UpdateTrailDTO } from "../DTOs/update-trail-dto";
import { Trail } from "../entities/Trail";
import { UpdateTrailRepository } from "../repositories/update-trail-repository";

export class UpdateTrail {
  /**
   *
   */
  constructor(private updateTrailRepository: UpdateTrailRepository) {
    
  }

  async execute(entity: UpdateTrailDTO): Promise<Trail> {
    const trailSchemaValidator = z.object({
      id: z.string().uuid(),
      description: z.string()
    })

    try {
      await trailSchemaValidator.parseAsync(entity)
    } catch (error) {
      console.error(error)
      throw error
    }

    const trail = await this.updateTrailRepository.execute(entity)

    return trail
  }
}