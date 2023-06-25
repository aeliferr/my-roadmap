import { Router } from "express"
import { TrailController } from "../controllers/trail-controller"
import { PrismaGetTrail, PrismaCreateTrail, PrismaDeleteTrail, PrismaUpdateTrail } from "../repositories/implementations"
import { UpdateTrail, GetTrail, CreateTrail, DeleteTrail } from "../useCases/"

const router = Router()
const getTrail = new GetTrail(new PrismaGetTrail())
const createTrail = new CreateTrail(new PrismaCreateTrail())
const updateTrail = new UpdateTrail(new PrismaUpdateTrail())
const deleteTrail = new DeleteTrail(new PrismaDeleteTrail())

const controller = new TrailController(getTrail, createTrail, updateTrail, deleteTrail)

router.get('/:id', async (req, res) => {
  const response = await controller.get(req)

  res.status(response.statusCode).json(response.body)
})
router.post('/', async (req, res) => {
  const response = await controller.post(req)

  res.status(response.statusCode).json(response.body)
})
router.put('/:id', async (req, res) => {
  const response = await controller.post(req)

  res.status(response.statusCode).json(response.body)
})
router.delete('/:id', async (req, res) => {
  const response = await controller.post(req)

  res.status(response.statusCode).json(response.body)
})

export default router