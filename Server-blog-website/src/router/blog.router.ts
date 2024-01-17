import { GetltestBloghandler } from "../controller/Blog.controller"
import requireUser from "../Middlewares/requireUser"
import { Router } from "express"

export default (router:Router) => {
router.get("/api/latest-blogs",GetltestBloghandler )
}