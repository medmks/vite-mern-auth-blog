import { FilterQuery } from 'mongoose'
import SessionModal, { SessionDoc } from '../Models/sessoin.modal'

export async function createSession(userId: String, userAgent: String) {
  const Session = await SessionModal.create({ user: userId, userAgent: userAgent })
  return Session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDoc>) {
  return SessionModal.find(query).lean();
}

