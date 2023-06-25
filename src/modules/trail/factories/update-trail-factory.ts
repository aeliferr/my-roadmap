import { UpdateTrailRepository } from "../repositories/update-trail-repository";
import { UpdateTrail } from "../useCases/update-trail";

export class UpdateTrailFactory {
  static execute(updateTrailRepository: UpdateTrailRepository): UpdateTrail {
    return new UpdateTrail(updateTrailRepository)
  }
}