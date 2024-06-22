import { CreateUser,getAuthors } from '../services/user.service'
import { CreateZod_UserInput } from './../Schema/user.schema'
import { Request, Response } from 'express'
// import { Omit } from 'lodash';
import { omit } from 'lodash'

export async function CreateUserHandler(req: Request<{}, {}, CreateZod_UserInput['body']>, res: Response) {
  try {
    const user = await CreateUser(req.body)
    return res.status(200).send(omit(user.toJSON(), 'password'))
  } catch (error) {
    return res.status(409).send(error.message)
  }
}
export async function getAuthorsBysearch(req:Request, res: Response) {
  try {
    const { query } = req.body
    const user = await getAuthors(query)
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return res.status(200).send(user)
  } catch (error) {
    return res.status(409).send(error.message)
  }
}
