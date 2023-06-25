import { Request, Response, Router } from 'express'
import { RoleController } from '../controllers/role-controller'
import { CreateRoleFactory } from '../factories/create-role-factory'
import { PrismaCreateRoleRepository } from '../repositories/implementations/prisma-create-role-repository'

const router = Router()

const createRole = CreateRoleFactory.create(new PrismaCreateRoleRepository)
const controller = new RoleController(createRole)

// router.get('/', RoleController.get)
router.post('/', async (req: Request, res: Response) => {
  const responseObject = await controller.post(req)

  res.status(responseObject.statusCode).json(responseObject.body)
})

export default router