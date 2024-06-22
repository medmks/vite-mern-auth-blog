import express from 'express'
import Register from './Sign-in'
import blog from './blog.router'
import user from './user.router';
const router = express.Router()

export default (): express.Router => {
  Register(router)
  blog(router)
  user(router)
  return router
}
