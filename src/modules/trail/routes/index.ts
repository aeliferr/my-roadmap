import { Router } from "express"
import { TrailController } from "../TrailController"

const router = Router()

router.get('/:id', TrailController.get)
router.get('/', TrailController.list)
router.post('/', TrailController.post)
router.put('/:id', TrailController.put)
router.delete('/:id', TrailController.delete)

export default router