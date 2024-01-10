import { createbloginput } from "../Schema/Blog.schema";
import { createNewBlog } from "../services/blog.service";
import { Request, Response } from "express";

export async function createBlogHandler(req:Request<{},{},createbloginput['body']>,res:Response){
      try{
                const user_id = res.locals.user._id;
                const body = req.body;
                const Blog = await createNewBlog({...body, author:user_id})
                res.status(200).send(Blog)
      }
      catch(error){
          return res.status(409).send(error.message)
      }
}