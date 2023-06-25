import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { CreateTrailDTO } from "../../DTOs/create-trail-dto";
import { CreateTrailFactory } from "../../factories/create-trail-factory";
import { CreateTrailRepository } from "../../repositories/create-trail-repository";
import { MockCreateTrailDTO } from "./mocks/mock-create-trail";

describe('create trail tests', () => {
  it('should throw an error on create a trail with null description', async () => {
    const createTrailRepository = {} as CreateTrailRepository
    const createTrail = CreateTrailFactory.execute(createTrailRepository)

    const createTrailDTO = { ...MockCreateTrailDTO.execute(), description: null as unknown as string } as CreateTrailDTO

    expect(createTrail.execute(createTrailDTO)).rejects.toThrow(ZodError)
  })

  it('should throw an error on create a trail with undefined description', async () => {
    const createTrailRepository = {} as CreateTrailRepository
    const createTrail = CreateTrailFactory.execute(createTrailRepository)

    const createTrailDTO = { ...MockCreateTrailDTO.execute(), description: null as unknown as string } as CreateTrailDTO

    expect(createTrail.execute(createTrailDTO)).rejects.toThrow(ZodError)
  })
})