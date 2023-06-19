import { Router } from 'express'
import { RoleController } from '../roleController'

const router = Router()

router.get('/', RoleController.get)
router.post('/', RoleController.post)

export default router