import { Route, Prisma } from "@prisma/client";

export interface RouteRepository {
  findMany(selectFields: (keyof Route)[]): Promise<Route[]>
}
