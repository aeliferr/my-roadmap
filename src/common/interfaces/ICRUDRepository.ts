import { QueryRepository } from "./IQueryRepository";

export interface CRUDepository<T, CreateArgs, FindFirstArgs, FindManyArgs> extends QueryRepository<T, FindFirstArgs, FindManyArgs> {
  create(entity: CreateArgs): Promise<T>
}