import { FilterQuery, UpdateQuery } from 'mongoose'
import SessionModal, { SessionDoc } from '../Models/sessoin.modal'
import config from 'config'
import { SignJwt, verifyJwt } from '../utils/jwt.utils'
import { get } from 'lodash'
import { findUser } from './user.service'

export async function createSession(userId: String, userAgent: String) {
  const Session = await SessionModal.create({ user: userId, userAgent: userAgent })
  return Session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDoc>) {
  return SessionModal.find(query).lean()
}

export async function UpdateSession(query: FilterQuery<SessionDoc>, update: UpdateQuery<SessionDoc>) {
  return SessionModal.updateOne(query, update)
}
export async function ReIssueAccessToken({ refreshToken }: { refreshToken: string }) {
  const { decoded } = verifyJwt(refreshToken)
  console.log(decoded)

  if (!decoded || !get(decoded, 'session')) return false
  const session = await SessionModal.findById(get(decoded, 'session'))

  if (!session || !session.valid) return false
  const user = await findUser({ _id: session.user })
  if (!user) return false

  const NewAccessToken = SignJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('accessTokenTtl') },
  )
  return NewAccessToken
}
