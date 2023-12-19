import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'
const Validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query,
    })
    next()
  } catch (error) {
    res.status(400).send(error)
  }
}
export default Validate
