import { Permission, Role } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from '../../../prisma'

export class RoleController {
  static async get(request: Request, response: Response) {
    const roles = await prisma.role.findMany()
    
    response.json(roles)
  }

  static async post(request: Request, response: Response) {
    const { description } = request.body
    const { fullAccess } = request.query
    
    const entity = await prisma.$transaction(async txClient => {
      const entity = await txClient.role.create({
        data: {
          description: description
        } as Role
      })

      if (fullAccess) {
        const routes = await txClient.route.findMany()

        await txClient.permission.createMany({
          data: routes.map(route => {
            return {
              routeId: route.id,
              roleId: entity.id
            } as Permission
          })
        })  
      }
      
      return entity
    })

    response.json(entity)
  }
}