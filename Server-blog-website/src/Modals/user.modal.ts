import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'
export interface UserInput {
  email?: string
  name?: string
  password?: string
}

export interface UserDoc extends UserInput, mongoose.Document {
  email: string
  name: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true },
)
userSchema.pre('save', async function (next) {
  let user = this as UserDoc
  if (!user.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(config.get<number>('saltworkFactor'))
  const Hash = bcrypt.hashSync(user.password, salt)
  user.password = Hash
  return next()
})

export const UserModal = mongoose.model<UserDoc>('User', userSchema)
