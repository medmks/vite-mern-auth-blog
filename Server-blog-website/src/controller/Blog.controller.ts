import { createbloginput } from "../Schema/Blog.schema";
import { GetLatestblogs, createNewBlog, getTrendsblogs } from "../services/blog.service";
import { Request, Response } from "express";

export async function createBlogHandler(req:Request<{},{},createbloginput['body']>,res:Response){
      try{
                const user_id = res.locals.user._id;
                const body = req.body;
                const Blog = await createNewBlog({...body, author:user_id})
                res.status(200).json({Blog})
      }
      catch(error){
          return res.status(409).send(error.message)
      }
}

export async function GetltestBloghandler(req:Request,res:Response) {
    try{
        const blogs = await GetLatestblogs()
        return res.status(200).send(blogs) 
    }catch(error){
          return res.status(409).send(error.message)

    }
}
export async function GetTrendsBloghandler(req:Request,res:Response) {
    try{
        const blogs = await getTrendsblogs()
        return res.status(200).send(blogs) 
    }catch(error){
          return res.status(409).send(error.message)

    }
}