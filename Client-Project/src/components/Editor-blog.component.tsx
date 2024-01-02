import React,{useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import { blogBanner, logo } from '../assets'
import AnimationWrapper from '../common/animation-page'
import supabase from '../common/supabase'
import { v4 as uuidv4 } from 'uuid';
import toast ,{Toaster} from 'react-hot-toast'
console.log(supabase);



//DEBUG:https://fsnavrdsbbyrbmtaddyb.supabase.co/storage/v1/object/public/BlogsImages/32e219ca-32cb-4ba7-86a3-fe4a4f336b76
const BlogEditor = () => {
const [Images,setImages] = useState({})
        const imgRef = useRef<HTMLImageElement>(null)
        //BUG: bug here ⬇ 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const GetImages = async () => {
                const {data , error } = await supabase 
                .storage
                .from("BlogsImages")
                .list('/',{
                        limit:100,
                        offset:0,
                })
                if(data !== null){
                        setImages(data)
                       console.log(Images);
                        return data
                }
                else(
                        console.log(error)
                        
                )
        }
        const HandelKeydown = (e:React.KeyboardEvent<HTMLTextAreaElement>) =>{
                if(e.keyCode === 13) return e.preventDefault()  
        }
        //TODO: resizing the height while typing in textarea
        const HandelchangeTitle = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
           const input = e.target;
           input.style.height = 'auto' ;     
           input.style.height = input.scrollHeight + "px"
        }
        const handelBannerup = async (e:React.ChangeEvent<HTMLInputElement> | null) => {
        const img = e?.target.files?.[0]
        if (img) {
                const toastupload = toast.loading("Uploading...")
                const {data, error} = await supabase
                  .storage
                  .from('BlogsImages')
                  .upload('/' + uuidv4().toString() , img);
                  if (data) {

                        const CdnUrl = `https://fsnavrdsbbyrbmtaddyb.supabase.co/storage/v1/object/public/BlogsImages/${data.path}` 
                        if (imgRef.current) { 
                                toast.dismiss(toastupload)
                                imgRef.current.src = CdnUrl;
                                toast.success("Success")
                              } 
                  }
                  else{
                        console.log(error);
                  }
                
              } else {
                console.error('File is undefined.');
              }

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
                                <Toaster/>
                              <section>
                                        <div className=' max-w-[999px] mx-auto w-full hover:opacity-80'>
                                                  <div className=' relative aspect-video bg-white border-4 border-grey'>
                                                            <label htmlFor="uploadBanner">
                                                            <img src={blogBanner} alt="" className='z-20' ref={imgRef} />

                                                                      <input id='uploadBanner' type="file" onChange={(e)=>handelBannerup(e)} accept='.png, .jpg, .jpeg' hidden />
                                                            </label>
                                                  </div>
                                                  <textarea name="" id="" onChange={(e) => HandelchangeTitle(e)} onKeyDown={(e) => HandelKeydown(e)} className=' text-4xl font-medium w-full h-20 outline-none mt-10 leading-tight placeholder:opacity-40'  placeholder='Blog Title'>

                                                  </textarea>

                                        </div>
                              </section>
                    </AnimationWrapper>
          </>

  )
}

export default BlogEditor