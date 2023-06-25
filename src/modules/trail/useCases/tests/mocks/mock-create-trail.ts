import { faker } from "@faker-js/faker";
import { CreateTrailDTO } from "../../../DTOs/create-trail-dto";

export class MockCreateTrailDTO { 
  static execute(): CreateTrailDTO {
    return {
      description: faker.lorem.word(15)
    }
  }
}