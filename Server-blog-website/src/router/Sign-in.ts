import { DeleteSessoinHandeler, createSessionHandler, getUserSessionHandeler } from '../controller/session.controller'
import Validate from '../Middlewares/validateRessources'
import { CreateUserZodShema } from '../Schema/user.schema'
import { CreateUserHandler } from '../controller/user.controller'
import { CreatesessionSchema } from '../Schema/session.Schema'
import { Router } from 'express'
import requireUser from '../Middlewares/requireUser'
import { CreatePostHandler, FindPostHandler } from '../controller/Post.Controller'
import { CreatePostSchema, GetPostSchema } from '../Schema/Post.schema'
import { CreateblogSchema } from '../Schema/Blog.schema';
import { createBlogHandler } from '../controller/Blog.controller'
// DEBUG: all requests should hace requieUser Middelware 
export default (router: Router) => {
  router.post('/api/sign-up', Validate(CreateUserZodShema), CreateUserHandler)
  router.post('/api/sign-in', Validate(CreatesessionSchema), createSessionHandler)
  router.get('/api/session', requireUser, getUserSessionHandeler);
  router.delete("/api/session",requireUser,DeleteSessoinHandeler);
  router.get("/api/posts/:postid", Validate(GetPostSchema) ,FindPostHandler)
  router.post("/api/newBlog" , [requireUser, Validate(CreateblogSchema) ],createBlogHandler)


}
