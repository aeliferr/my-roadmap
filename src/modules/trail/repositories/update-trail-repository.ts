import { UpdateTrailDTO } from "../DTOs/update-trail-dto";
import { Trail } from "../entities/Trail";

export interface UpdateTrailRepository {
  execute(entity: UpdateTrailDTO): Promise<Trail>
}