import { z } from "zod";
import { DeleteTrailRepository } from "../repositories/delete-trail-repository";

export class DeleteTrail {
  /**
   *
   */
  constructor(private deleteTrail: DeleteTrailRepository) {
    
  }

  async execute(id: string): Promise<void> {
    const trailSchemaValidator = z.object({
      id: z.string()
    })

    await trailSchemaValidator.parseAsync(id)

    const trail = await this.deleteTrail.execute(id)

    return trail
  }
}