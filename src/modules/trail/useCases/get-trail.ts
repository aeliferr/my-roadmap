import { z } from "zod";
import { Trail } from "../entities/Trail";
import { GetTrailRepository } from "../repositories/get-trail-repository";

export class GetTrail {
  /**
   *
   */
  constructor(private getTrail: GetTrailRepository) {
    
  }

  async execute(id: string): Promise<Trail> {
    const trailSchemaValidator = z.object({
      id: z.string()
    })

    await trailSchemaValidator.parseAsync(id)

    const trail = await this.getTrail.execute(id)

    if (!trail) throw new Error('trail not found')
    
    return trail
  }
}