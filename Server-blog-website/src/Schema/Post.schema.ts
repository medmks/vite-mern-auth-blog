import { TypeOf, object, string } from 'zod'

const payload = {
  body: object({
    title: string({ required_error: 'title is required' }),
    description: string({ required_error: 'description is required' }).min(120, 'Description Should at least 120'),
    image: string({ required_error: 'Image is required' }),
  }),
}

const params = {
  params: object({
    postid: string({
      required_error: 'Post Id is required',
    }),
  }),
}
export const CreatePostSchema = object({
  ...payload,
})
export const UpdatePostSchema = object({
  ...payload,
  ...params,
})
export const DeletePostSchema = object({
  ...params,
})
export const GetPostSchema = object({
  ...params,
})
export type CreatePostInput = TypeOf<typeof CreatePostSchema>

export type UpdatePostInput = TypeOf<typeof UpdatePostSchema>

export type DeletePostInput = TypeOf<typeof DeletePostSchema>

export type GetPostInput = TypeOf<typeof GetPostSchema>
