import { GetltestBloghandler, GetTrendyBlogs, SearchBlogController } from '../controller/Blog.controller'

import requireUser from '../Middlewares/requireUser'
import { Router } from 'express'

export default (router: Router) => {
  router.get('/api/latest-blogs', GetltestBloghandler)
  router.get('/api/trendy-blogs', GetTrendyBlogs)
  router.post('/api/search-blog', SearchBlogController)
}
