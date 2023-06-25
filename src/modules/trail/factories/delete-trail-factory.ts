import { DeleteTrailRepository } from "../repositories/delete-trail-repository";
import { DeleteTrail } from "../useCases/delete-trail";

export class DeleteTrailFactory {
  static execute(deleteTrailRepository: DeleteTrailRepository): DeleteTrail {
    return new DeleteTrail(deleteTrailRepository)
  }
}