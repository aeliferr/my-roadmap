export interface QueryRepository<T, FindFirstArgs, FindManyArgs> {
  findBy(prop: keyof T): Promise<T | null>
  findMany(prop: keyof T, value: T[keyof T] ): Promise<T[]>
}