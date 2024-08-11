import {
  GetltestBloghandler,
  GetTrendyBlogs,
  getSearchTotalDocs,
  SearchBlogController,
  getTotalDocs,
  SearchBlogByQueryController,
} from '../controller/Blog.controller'

import { Router } from 'express'

export default (router: Router) => {
  router.post('/api/latest-blogs', GetltestBloghandler)
  router.get('/api/trendy-blogs', GetTrendyBlogs)
  router.post('/api/search-blog', SearchBlogController)
  router.post('/api/all_latest', getTotalDocs)
  router.post('/api/search-count-docs', getSearchTotalDocs)
  router.post('/api/search', SearchBlogByQueryController)
}
