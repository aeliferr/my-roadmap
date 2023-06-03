import express from 'express'
import { TrailController } from './modules/trail/TrailController'

const app = express()

app.use(express.json())

app.get('/trails/:id', TrailController.get)

app.post('/trails', TrailController.post)
app.put('/trails/:id', TrailController.put)
app.delete('/trails/:id', TrailController.delete)

app.listen(3000, () => {
  console.log('Running')
})
