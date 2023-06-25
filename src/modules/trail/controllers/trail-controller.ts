import { HttpRequest } from '../../../common/http-request'
import { HttpResponse, HttpResponseObject } from '../../../common/http-response'
import { Trail } from '../entities/Trail'
import { CreateTrail, DeleteTrail, GetTrail, UpdateTrail } from '../useCases'

export class TrailController {
  /**
   *
   */
  constructor(private getTrail: GetTrail, private createTrail: CreateTrail, private updateTrail: UpdateTrail, private deleteTrail: DeleteTrail) {
    
  }

  async get(request: HttpRequest): Promise<HttpResponseObject<Trail>> {
    const { id } = request.params   

    const trail = await this.getTrail.execute(id)

    return HttpResponse.ok(trail)
  }

  async post(request: HttpRequest): Promise<HttpResponseObject<Trail>> {
    const { description } = request.body;

    const trail = await this.createTrail.execute({ description })

    return HttpResponse.ok(trail)
  }
  
  async put(request: HttpRequest): Promise<HttpResponseObject<Trail>> {
    const { id } = request.params
    const { description } = request.body;
    
    const trail = await this.updateTrail.execute({ id: String(id), description })

    return HttpResponse.ok(trail)
  }

  async delete(request: HttpRequest): Promise<HttpResponseObject<void>> {
    const { id } = request.params
    
    
    await this.deleteTrail.execute(id)

    return HttpResponse.ok()
  }
}
