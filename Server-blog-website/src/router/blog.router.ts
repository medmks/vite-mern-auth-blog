import { GetltestBloghandler, GetTrendsBloghandler } from "../controller/Blog.controller"
import requireUser from "../Middlewares/requireUser"
import { Router } from "express"

export default (router:Router) => {
router.get("/api/latest-blogs",GetltestBloghandler)
router.get("/api/trends-blogs",GetTrendsBloghandler)
}