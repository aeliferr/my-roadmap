import { CreateTrailRepository } from "../repositories/create-trail-repository";
import { CreateTrail } from "../useCases/create-trail";

export class CreateTrailFactory {
  static execute(createTrailRepository: CreateTrailRepository): CreateTrail {
    return new CreateTrail(createTrailRepository)
  }
}