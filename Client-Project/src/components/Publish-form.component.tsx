import { Toaster } from "react-hot-toast";
import AnimationWrapper from "../common/animation-page";
import {UseEditorContext} from "../Hooks/UseEditorContext";
import React from "react";

const Publishform = () => {
  const { blog,setblog } = UseEditorContext();
  const HandelKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {

    const input =  e?.target
    if(e.keyCode === 13 && input instanceof HTMLInputElement){
        // setblog({...blog, tags:input.value})
        e.preventDefault()
        console.log(input.value);
                setblog({...blog, tags:[...blog.tags ,input.value ]})

    }
    
    
  }
  return <AnimationWrapper>
    <section className=" w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster/>
        <button className=" absolute w-12 h-12 right-[5vh] z-10 top-[5%] lg:top-[10%]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-w-[550px] center ">
           <p className="text-dark-grey mb-1">Preview</p>
           <div className=" w-full aspect-video  rounded-lg  overflow-hidden bg-grey mt-4 ">
            <img src={blog.banner} className="" alt=""  />
           </div>
           <h1 className=" text-4xl font-medium mt-2 leading-tight line-clamp-2">{blog.title}</h1>
        </div>
        <div className=" flex flex-col gap-5">
          <label className="text-xl font-gelasio text-dark-grey leading-5" htmlFor="Blog Title ">Blog Title</label>
          <input className="bg-grey rounded-md mb-10 outline-none h-10 py-7 p-4 text-black font-gelasio mt-2  text-xl  "  type="text" placeholder="Edit Blog Title" />

          <label className="text-xl font-gelasio text-dark-grey leading-5 " htmlFor="Blog Description    ">Blog Description</label>
          <textarea className="bg-grey rounded-md outline-none mb-10 input-box resize-none h-40 p-5 text-xl font-gelasio    " >
          </textarea>
          
          <label className="text-xl font-gelasio text-dark-grey leading-5" htmlFor="Blog Description ">Topics - help us searching and ranking your blog</label>

          <div className="bg-grey h-fit  rounded-md p-5 ">
            <input type="text" onKeyDown={(e) => HandelKeyDown(e)} className="bg-white resize-none  rounded-md mb-10 outline-none h-10 py-7 p-4 text-black font-gelasio mt-2  text-xl  "  placeholder="Tags" />
            <div className=" flex flex-wrap gap-4 input-box">
              {
                blog?.tags?.map((tag , i) => {
                  return (
                    <div key={i} className="rounded-full text-[15px] bg-white p-3  px-7 flex gap-3 ">
                     <span>{tag}</span> 
                      <button>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                      </button>

                    </div>
                  )
                } )
              }
            </div>
          </div>

        </div>
    </section>
    {/* Fuck Israel */}
    
    </AnimationWrapper>;
};
export default Publishform;
