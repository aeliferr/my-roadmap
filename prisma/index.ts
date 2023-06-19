import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
const prisma = new PrismaClient()

prisma.$use(async (params, next) => {
  if (params.action === 'create') {
    params.args.data.id = uuidv4()
  }

  if (params.action === 'createMany') {
    params.args.data = params.args.data.map((data: any) => {
      return { ...data, id: uuidv4() }
    })
  }

  const result = await next(params)

  return result
})

export { prisma }