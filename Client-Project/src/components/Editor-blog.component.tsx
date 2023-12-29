import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const BlogEditor = () => {
  return (
          <>
                              <nav className="navbar">
                              <Link className='flex-none w-10' to='/'>
                                        <img src={logo} alt='logo' />
                              </Link>
                              <p className='max-md:hidden text-black line-clamp-1 w-full'>New Article</p>
                              <div className='flex gap-4 ml-auto'>
                                        <button className='btn-dark py-2'>
                                                  Publish
                                        </button>        
                                        <button className=' btn-light py-2'>
                                                  Save draft
                                        </button>        
                                        
                              </div>
                    </nav>
          </>

  )
}

export default BlogEditor