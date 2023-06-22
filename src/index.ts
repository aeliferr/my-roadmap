import cors from 'cors'
import express from 'express'
import { Permission, Prisma, PrismaClient, Route } from '@prisma/client'
import listEndpoints from 'express-list-endpoints'
import trailRouter from './modules/trail/routes'
import roleRouter from './modules/role/routes'
import { prisma } from '../prisma'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/roles', roleRouter)
app.use('/trails', trailRouter)

app.listen(4000, async () => {
  const routes = listEndpoints(app) 
  const normalizedRoutes: Route[] = []
  
  routes.forEach(route => {
    if (route.methods.length > 1) {
      route.methods.forEach(method => {
        normalizedRoutes.push({
          description: route.path,
          method: method
        } as Route)
      })
    } else {
      normalizedRoutes.push({
        description: route.path,
        method: route.methods[0]
      } as Route)
    }
  })

  const persistedRoutes = await prisma.route.findMany()

  const routesToRemove: Route[] = []

  if (persistedRoutes) {
    persistedRoutes.forEach(persistedRoute => {
      const routeIndex = normalizedRoutes.findIndex(x => x.description === persistedRoute.description && x.method === persistedRoute.method)
  
      if (routeIndex === -1) {
        routesToRemove.push(persistedRoute) 
      } else {
        normalizedRoutes.splice(routeIndex, 1)
      }
    })
  
    await prisma.route.deleteMany({
      where: {
        id: {
          in: routesToRemove.map(routes => routes.id)
        }
      }
    })  
  }

  await prisma.$transaction(async txClient => {
    await addPermissions(txClient, normalizedRoutes)
  })
  
  console.log('running')
})

async function addPermissions(txClient: Prisma.TransactionClient, routes: Route[]) {
  const createdRoutes: Route[] = []

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];

    const createdRoute = await txClient.route.create({
      data: route
    })

    createdRoutes.push(createdRoute)
  }

  const roles = await txClient.role.findMany()

  if (roles) {
    for (let index = 0; index < roles.length; index++) {
      const roleId = roles[index].id;
      const permissionsToCreate = createdRoutes.map(route => {
        return {
          roleId,
          routeId: route.id
        } as Permission
      })
  
      await txClient.permission.createMany({
        data: permissionsToCreate
      })
    }  
  }
}

export { app }