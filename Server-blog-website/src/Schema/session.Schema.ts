import { string, object } from 'zod'

export const CreatesessionSchema = object({
  body: object({
    email: string({
      required_error: 'email required ',
    }),
    password: string({
      required_error: 'password is required',
    }),
  }),
})
