import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { UpdateTrailDTO } from "../../../DTOs/update-trail-dto";

export class MockUpdateTrailDTO { 
  static execute(): UpdateTrailDTO {
    return {
      id: uuidv4(),
      description: faker.lorem.word(15)
    }
  }
}