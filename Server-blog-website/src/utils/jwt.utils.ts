import jwt from 'jsonwebtoken'
import config from 'config'

const PublicKey = config.get<string>('publicKey')
const PrivateKey = config.get<string>('privateKey')

export function SignJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, PrivateKey, {
    ...(options && options),
    algorithm: 'RS256',
  })
} 
export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, PublicKey)
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (e) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    }
  }
}
