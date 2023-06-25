import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { GetTrailFactory } from "../../factories/get-trail-factory";
import { GetTrailRepository } from "../../repositories/get-trail-repository";

describe('get trail tests', () => {
  it('should throw an error on try get a trail without providing id', async () => {
    const getTrailRepository = {} as GetTrailRepository
    const getTrail = GetTrailFactory.execute(getTrailRepository)

    expect(getTrail.execute(undefined as unknown as string)).rejects.toThrow(ZodError)
  })
})