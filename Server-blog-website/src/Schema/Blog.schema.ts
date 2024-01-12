import { TypeOf, object} from "zod";
import { string } from "zod";
import { number } from "zod";
import { array } from "zod";

const payload = {
          body :object({
             title : string({required_error:"Title is required"}),
             banner:string({required_error:"image is required"}),
             description:string({required_error:"description is required"}).min(20,"max 20 letter"),
       
          })
}
const params= {
          params :object({
                    blogId:string({
                              required_error:"Post Id is required"
                    })
          })
}

export const CreateblogSchema = object({
          ...payload
})

export const deleteblogSchema = object({
          ...params
})

export const updateblogSchema = object({
          ...payload,
          ...payload
})

export const GetblogSchema = object({
          ...params
})

export type createbloginput = TypeOf<typeof CreateblogSchema>
export type showbloginput = TypeOf<typeof GetblogSchema>
export type updatebloginput = TypeOf<typeof updateblogSchema>
export type deletbloginput = TypeOf<typeof deleteblogSchema>
