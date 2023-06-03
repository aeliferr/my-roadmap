import { v4 as uuidv4 } from 'uuid'
import { Request, Response } from 'express'
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

export class TrailController {
  static async get(request: Request, response: Response): Promise<void> {
    const { id } = request.params   

    const trails = await prisma.trails.findUnique({
      where: {
        id: id
      }
    })

    response.json(trails)
  }

  static async post(request: Request, response: Response): Promise<void> {
    const { description } = request.body;

    const trail = await prisma.trails.create({
      data: {
        id: uuidv4(), 
        description,
      } as Prisma.TrailsCreateInput 
    })

    response.json(trail)
  }
  
  static async put(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const { description } = request.body;
    
    const trail = await prisma.trails.findUnique({
      where: {
        id
      }
    })

    if (!trail) {
     throw new Error('Trail does not exists') 
    }

    const updatedTrail = await prisma.trails.update({
      where: {
        id
      },
      data: {
        description,
      } as Prisma.TrailsUpdateInput
    })

    response.json(updatedTrail)
  }
  static async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    
    const trail = await prisma.trails.findUnique({
      where: {
        id
      }
    })

    if (!trail) {
     throw new Error('Trail does not exists') 
    }

    await prisma.trails.delete({
      where: {
        id
      }
    })

    response.sendStatus(200)
  }
}
