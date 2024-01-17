import axios from "axios"
import AnimationWrapper from "../common/animation-page"
import InPageNavigation from "../components/InPageNavigation.component"
import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard.component"

export type BlogTy={
  blog:{
    createdAt:string
    activity: {
      total_likes: number,
      total_comments: number,
      total_reads: number,
      total_parent_comments: number
  },
  _id: string,
  title: string ,
  banner: string,
  description: string,
  tags:string[],
  author: {
      _id: string,
      name: string
  },
  blog_id:string
  }
}


const  HomePage= () => {
  const [blog,setblog] = useState<BlogTy[]>([])
  useEffect(()=>{
 const FetchLatestBlog = () =>{
  axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs",{
    headers:{
    }
  })
  .then(({data}) =>{
    setblog(data)
  })

 } 
  FetchLatestBlog()
  },[])

  return (
    <AnimationWrapper> 
          <section className=" h-cover flex justify-center gap-10">
                    <div className="w-full">
                              <InPageNavigation defaulthidden={['trending blogs']} routes={['home','trending blogs']}>
                                  
                                    <>
                                    {
                                      blog=== null ? 'waiting for data' : blog.map((blog, i:number) =>{
                                        return(
                                          <AnimationWrapper key={i} transition={{duration:1,delay:i*.1}}>
                                                    <BlogCard blog={blog} key={i}/>
                                          </AnimationWrapper>
                                        )
                                      })
                                    }
                                    </>




                                    <h1>
                                      Top Trend Blogs 
                                    </h1>
                                
                              </InPageNavigation>
                              {/*latest blogs  */}
                    </div>
                    <div>
                              {/* Filter blogs */}
                    </div>    
          </section>
    </AnimationWrapper>
  )
}

export default  HomePage