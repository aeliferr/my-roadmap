export interface DeleteTrailRepository {
  execute(id: string): Promise<void>
}