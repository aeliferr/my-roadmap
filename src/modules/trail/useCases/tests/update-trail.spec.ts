import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { UpdateTrailDTO } from "../../DTOs/update-trail-dto";
import { UpdateTrailFactory } from "../../factories/update-trail-factory";
import { UpdateTrailRepository } from "../../repositories/update-trail-repository";
import { MockUpdateTrailDTO } from "./mocks/mock-update-trail";

describe('update trail tests', () => {
  it('should throw an error on update a trail with null description', async () => {
    const updateTrailRepository = {} as UpdateTrailRepository
    const updateTrail = UpdateTrailFactory.execute(updateTrailRepository)

    const updateTrailDTO = { ...MockUpdateTrailDTO.execute(), description: null as unknown as string } as UpdateTrailDTO

    expect(updateTrail.execute(updateTrailDTO)).rejects.toThrow(ZodError)
  })

  it('should throw an error on update a trail with null id', async () => {
    const updateTrailRepository = {} as UpdateTrailRepository
    const updateTrail = UpdateTrailFactory.execute(updateTrailRepository)

    const updateTrailDTO = { ...MockUpdateTrailDTO.execute(), id: null as unknown as string } as UpdateTrailDTO

    expect(updateTrail.execute(updateTrailDTO)).rejects.toThrow(ZodError)
  })

  it('should throw an error on update a trail with invalid id', async () => {
    const updateTrailRepository = {} as UpdateTrailRepository
    const updateTrail = UpdateTrailFactory.execute(updateTrailRepository)

    const updateTrailDTO = { ...MockUpdateTrailDTO.execute(), id: 'invalid_id' } as UpdateTrailDTO

    expect(updateTrail.execute(updateTrailDTO)).rejects.toThrow(ZodError)
  })
})