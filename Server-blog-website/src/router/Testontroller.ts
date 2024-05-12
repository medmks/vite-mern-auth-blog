import { DeleteSessoinHandeler, getUserSessionHandeler } from '../controller/session.controller'
import requireUser from '../Middlewares/requireUser'
import express from 'express'

export default (router: express.Router) => {
  router.get('/api/test', (req: express.Request, res: express.Response) => {
    try {
      return res.status(200).send('test Api')
    } catch (error) {
      return res.status(400).send(error)
    }
  })
}
