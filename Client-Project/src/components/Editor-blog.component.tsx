import React from 'react'
import { Link } from 'react-router-dom'
import { blogBanner, logo } from '../assets'
import AnimationWrapper from '../common/animation-page'

const BlogEditor = () => {
          const handelBannerup = (e:React.ChangeEvent<HTMLInputElement> | null) => {
                    console.log(e);
                    const img = e?.target     
          }
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
                    <AnimationWrapper>

                              <section>
                                        <div className=' max-w-[999px] mx-auto w-full hover:opacity-80'>
                                                  <div className=' relative aspect-video bg-white border-4 border-grey'>
                                                            <label htmlFor="uploadBanner">
                                                            <img src={blogBanner} alt="" className='z-20' />

                                                                      <input id='uploadBanner' type="file" onChange={(e)=>handelBannerup(e)} accept='.png, .jpg, .jpeg' hidden />
                                                            </label>
                                                  </div>

                                        </div>
                              </section>
                    </AnimationWrapper>
          </>

  )
}

export default BlogEditor