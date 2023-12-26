import { createSessionHandler, getUserSessionHandeler } from '../controller/session.controller'
import Validate from '../Middlewares/validateRessources'
import { CreateUserZodShema } from '../Schema/user.schema'
import { CreateUserHandler } from '../controller/user.controller'
import { CreatesessionSchema } from '../Schema/session.Schema'
import { Router } from 'express'
import requireUser from '../Middlewares/requireUser'

export default (router: Router) => {
  router.post('/api/sign-up', Validate(CreateUserZodShema), CreateUserHandler)
  router.post('/api/session', Validate(CreatesessionSchema), createSessionHandler)
  router.get('/api/session', requireUser, getUserSessionHandeler)
}
