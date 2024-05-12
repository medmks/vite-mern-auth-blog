import express from 'express'
import Register from './Sign-in'
import Testontroller from './Testontroller'
import blog from './blog.router'

const router = express.Router()

export default (): express.Router => {
  Register(router)
  Testontroller(router)
  blog(router)

  return router
}
