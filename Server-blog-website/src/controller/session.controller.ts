import { Request, Response } from 'express'
import { ValidatePassword } from '../services/user.service'
import { createSession } from '../services/session.service'

import { SignJwt } from '../utils/jwt.utils'
import config from 'config'

export async function createSessionHandler(req: Request, res: Response) {
  // Todo: Validate user's password

  const user = await ValidatePassword(req.body)
  if (!user) return res.status(401).send('invalid Email or password')

  // Todo: Create Session

  const session = await createSession(user._id, req.get('user-agent') || '')

  //TODO: Create Access Token

  const AccessToken = SignJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('accessTokenTtl') }, //15min
  )

  //TODO: Create Refresh Token

  const RefreshToken = SignJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('refreshTokenttl') }, //15min
  )

  // Todo: Return access and refresh token

  return res.send({ AccessToken, RefreshToken })
}

export async function getSessionHandeler(req: Request, res: Response) {}
