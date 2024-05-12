import { createbloginput } from '../Schema/Blog.schema'

import { GetLatestblogs, createNewBlog, Tendy_blogs, SearchBlogService } from '../services/blog.service'

import { Request, Response } from 'express'

export async function createBlogHandler(req: Request<{}, {}, createbloginput['body']>, res: Response) {
  try {
    const user_id = res.locals.user._id
    const body = req.body
    const Blog = await createNewBlog({ ...body, author: user_id })
    res.status(200).json({ Blog })
  } catch (error) {
    return res.status(409).send(error.message)
  }
}

export async function GetltestBloghandler(req: Request, res: Response) {
  try {
    const blogs = await GetLatestblogs()
    return res.status(200).send(blogs)
  } catch (error) {
    return res.status(409).send(error.message)
  }
}

export async function GetTrendyBlogs(req: Request, res: Response) {
  try {
    const blogs = await Tendy_blogs()

    return res.status(200).send(blogs)
  } catch (error) {
    return res.status(409).send(error.message)
  }
}
export async function SearchBlogController(req: Request, res: Response) {
  const { tag } = req.body
  try {
    const Foundedblogs = await SearchBlogService(tag)
    console.log(Foundedblogs)

    return res.status(200).send(Foundedblogs)
  } catch (error) {
    return res.status(409).send(error.message)
  }
}
