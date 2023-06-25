import { Trail } from "../entities/Trail";

export type UpdateTrailDTO = Pick<Trail, 'id' | 'description'>