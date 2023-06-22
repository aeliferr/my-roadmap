import { Route, Prisma } from "@prisma/client";
import { CRUDepository } from "../../../common/interfaces/ICRUDRepository";

export interface RouteRepository extends CRUDepository<Route, Prisma.RouteCreateArgs, Prisma.RouteFindFirstArgs, Prisma.RouteFindManyArgs> {

}