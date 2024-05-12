import { BLogInput, BlogDocument } from './../Models/Blog.model'
import { Blogmodel } from '../Models/Blog.model'
import mongoose from 'mongoose'
export async function createNewBlog(inputs: BLogInput) {
  try {
    return await Blogmodel.create(inputs)
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      throw new Error('ValidatorError' + error.message)
    } else {
      throw new Error('Unxpected Error' + error.message)
    }
  }
}

export async function GetLatestblogs() {
  try {
    const blogs = await Blogmodel.find({ draft: false })
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .select('blog_id tags createdAt description title activity banner -_id ')
      .limit(5)

    return blogs
  } catch (error) {
    throw new Error('Unxpected Error' + error.message)
  }
}

export async function Tendy_blogs() {
  try {
    const Trends = await Blogmodel.find({ draft: false })
      .populate('author', 'name')
      .sort({ 'activity.total_reads': -1, 'activity.total_likes': -1, createdAt: -1 })
      .select('blog_id createdAt title -_id ')
      .limit(5)

    return Trends
  } catch (error) {
    throw new Error('Unxpected Error' + error.message)
  }
}
export async function SearchBlogService(Tag: string) {
  try {
    let findQuey = { tags: Tag, draft: false }
    console.log(findQuey)

    const SearchingBlogs = await Blogmodel.find(findQuey)
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .select('blog_id tags createdAt description title activity banner -_id ')
      .limit(5)
    return SearchingBlogs
  } catch (error) {
    throw new Error('Unxpected Error' + error.message)
  }
}
