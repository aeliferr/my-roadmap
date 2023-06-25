import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { DeleteTrailFactory } from "../../factories/delete-trail-factory";
import { DeleteTrailRepository } from "../../repositories/delete-trail-repository";

describe('delete trail tests', () => {
  it('should throw an error on try delete a trail without providing id', async () => {
    const deleteTrailRepository = {} as DeleteTrailRepository
    const deleteTrail = DeleteTrailFactory.execute(deleteTrailRepository)

    expect(deleteTrail.execute(undefined as unknown as string)).rejects.toThrow(ZodError)
  })
})