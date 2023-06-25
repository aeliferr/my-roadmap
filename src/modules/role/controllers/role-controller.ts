import { ZodError } from "zod";
import { HttpRequest } from "../../../common/http-request";
import { HttpResponse, HttpResponseObject } from "../../../common/http-response";
import { Role } from "../entities/Role";
import { CreateRole } from "../useCases/create-role";

export class RoleController {
  /**
   *
   */
  constructor(private createRole: CreateRole) {
    
  }
  
  async post(httpRequest: HttpRequest): Promise<HttpResponseObject<Role | ZodError | Error>> {
    try {
      const { description } = httpRequest.body
      
      const role = await this.createRole.execute({ description })

      return HttpResponse.ok(role)
    } catch (error) {
      if (error instanceof ZodError) {
        return HttpResponse.badRequest(error)
      }

      console.log(error)
      return HttpResponse.serverError(error as Error)
    }
  }
}