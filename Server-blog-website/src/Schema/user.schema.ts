import z, { object, TypeOf } from 'zod'

export const CreateUserZodShema = object({
  body: object({
    name: z.string({
      required_error: 'name is required',
    }),
    email: z
      .string({
        required_error: 'email is required',
      })
      .email('_Not valid Email_'),
    password: z
      .string({
        required_error: ' password is required',
      })
      .min(6, 'Password too short - should be 6 chars minimum'),
  }),
}).required()

export type CreateZod_UserInput = TypeOf<typeof CreateUserZodShema>
