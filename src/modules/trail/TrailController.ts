import { Request, Response } from 'express'
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

export class TrailController {
  static async list(request: Request, response: Response): Promise<void> {
    const trails = await prisma.trail.findMany()

    response.json(trails)
  }

  static async get(request: Request, response: Response): Promise<void> {
    const { id } = request.params   

    const trails = await prisma.trail.findUnique({
      where: {
        id: id
      }
    })

    response.json(trails)
  }

  static async post(request: Request, response: Response): Promise<void> {
    const { description } = request.body;

    const trail = await prisma.trail.create({
      data: {
        description,
      } as Prisma.TrailCreateInput 
    })

    response.json(trail)
  }
  
  static async put(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const { description } = request.body;
    
    const trail = await prisma.trail.findUnique({
      where: {
        id
      }
    })

    if (!trail) {
     throw new Error('Trail does not exists') 
    }

    const updatedTrail = await prisma.trail.update({
      where: {
        id
      },
      data: {
        description,
      } as Prisma.TrailUpdateInput
    })

    response.json(updatedTrail)
  }
  static async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    
    const trail = await prisma.trail.findUnique({
      where: {
        id
      }
    })

    if (!trail) {
     throw new Error('Trail does not exists') 
    }

    await prisma.trail.delete({
      where: {
        id
      }
    })

    response.sendStatus(200)
  }
}
