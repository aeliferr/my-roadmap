import { Trail } from "../entities/Trail";

export interface GetTrailRepository {
  execute(id: string): Promise<Trail | null>
}