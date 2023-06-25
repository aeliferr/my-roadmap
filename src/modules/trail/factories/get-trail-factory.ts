import { GetTrailRepository } from "../repositories/get-trail-repository";
import { GetTrail } from "../useCases/get-trail";

export class GetTrailFactory {
  static execute(getTrailRepository: GetTrailRepository): GetTrail {
    return new GetTrail(getTrailRepository)
  }
}