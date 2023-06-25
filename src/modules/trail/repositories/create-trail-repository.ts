import { CreateTrailDTO } from "../DTOs/create-trail-dto";
import { Trail } from "../entities/Trail";

export interface CreateTrailRepository {
  create(entity: CreateTrailDTO): Promise<Trail>
}