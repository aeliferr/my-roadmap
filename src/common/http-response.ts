export type HttpResponseObject<T> = { statusCode: number, body: T}

export class HttpResponse {
  static ok<T>(data: T): HttpResponseObject<T> {
    return {
      statusCode: 200,
      body: data
    } as HttpResponseObject<T>
  }

  static badRequest<T>(data: T): HttpResponseObject<T> {
    return {
      statusCode: 400,
      body: data
    } as HttpResponseObject<T>
  }

  static serverError<T>(data: T): HttpResponseObject<T> {
    return {
      statusCode: 500,
      body: data
    } as HttpResponseObject<T>
  }
}