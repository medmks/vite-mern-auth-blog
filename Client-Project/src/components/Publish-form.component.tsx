import toast, { Toaster } from "react-hot-toast";
import AnimationWrapper from "../common/animation-page";
import { UseEditorContext } from "../Hooks/UseEditorContext";
import React from "react";
import axios from "axios";
import { UseUserAuthContext } from "../Hooks/UserContext";
import { useNavigate } from "react-router-dom";

const Publishform = () => {
  const {
    blog,
    blog: { tags, title, content, description, author, banner },
    setblog,
    setEditorState,
  } = UseEditorContext();
  const navigate = useNavigate();

  const Taglimit: number = 10;
  const { userAuth } = UseUserAuthContext();

  const HandelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e?.target;
    if (e.keyCode === 13 && input instanceof HTMLInputElement) {
      // setblog({...blog, tags:input.value})
      e.preventDefault();

      setblog({ ...blog, tags: [...tags, input.value] });
      console.log(blog);
    }
  };
  const AddEditable = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (e.target instanceof HTMLParagraphElement) {
      e.target.setAttribute("contentEditable", "true");
      e.target.focus();
    }
  };
  const HandelkeyTagdown = (
    e: React.KeyboardEvent<HTMLParagraphElement>,
    tagIndex: number,
  ) => {
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();

      if (e.target instanceof HTMLParagraphElement) {
        const newTagValue = e.target.innerText;
        blog.tags[tagIndex] = newTagValue;
        setblog({ ...blog, tags });
        console.log(blog);

        console.log(blog.tags);
      }
    }
  };
  const handelPublish = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!title || !content || !description) {
      toast.error("make sure that all fields filled in ");
    }
    const WrittenBlog = { title, content, banner, description, author, tags };

    const loading = toast.loading("loading..");
    if (e.target instanceof HTMLButtonElement) {
      e.target.classList.add("disable");
    }

    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + "/newBlog", WrittenBlog, {
        headers: {
          Authorization: `Bearer ${userAuth.AccessToken}`,
          "x-refresh": userAuth.RefreshToken,
        },
      })
      .then(() => {
        if (e.target instanceof HTMLButtonElement) {
          e.target.classList.remove("disable");
          toast.dismiss(loading);
          toast.success("Published 💫");
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
      })
      .catch(({ response }) => {
        if (e.target instanceof HTMLButtonElement) {
          e.target.classList.remove("disable");
          toast.dismiss(loading);
        }
        return toast.error(response.data.error + "💥");
      });
  };
  const closePublisform = () => {
    setEditorState("editor");
  };
  const removeTag = (RemovedTag: string) => {
    const FiltredTagblog = blog.tags.filter((tag) => tag !== RemovedTag);
    setblog({ ...blog, tags: FiltredTagblog });
  };
  return (
    <AnimationWrapper>
      <section className=" w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster />
        <button
          onClick={() => closePublisform()}
          className=" absolute w-12 h-12 right-[5vh] z-10 top-[5%] lg:top-[10%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-w-[550px] center ">
          <p className="text-dark-grey mb-1">Preview</p>
          <div className=" w-full aspect-video  rounded-lg  overflow-hidden bg-grey mt-4 ">
            <img src={blog.banner} className="" alt="" />
          </div>
          <h1 className=" text-4xl font-medium mt-2 leading-tight line-clamp-2">
            {blog.title}
          </h1>
        </div>
        <div className=" flex flex-col gap-5">
          <p className="text-xl font-gelasio text-dark-grey leading-5">
            Blog Title
          </p>
          <input
            defaultValue={blog.title}
            onChange={(e) => setblog({ ...blog, title: e.target.value })}
            className="bg-grey rounded-md mb-10 outline-none h-10 py-7 p-4 text-black font-gelasio mt-2  text-xl"
            type="text"
            placeholder="Edit Blog Title"
          />

          <p className="text-xl font-gelasio text-dark-grey leading-5 ">
            Blog Description
          </p>
          <textarea
            onChange={(e) => setblog({ ...blog, description: e.target.value })}
            className="bg-grey rounded-md outline-none mb-10 input-box resize-none h-40 p-5 text-xl font-gelasio    "
          ></textarea>

          <p className="text-xl font-gelasio text-dark-grey leading-5">
            Topics - help us searching and ranking your blog
          </p>

          <div className="bg-grey h-fit  rounded-md p-5 ">
            <input
              placeholder="Tags"
              disabled={Taglimit === blog.tags.length ? true : false}
              type="text"
              onKeyDown={(e) => HandelKeyDown(e)}
              className="bg-white resize-none w-full  rounded-md mb-10 outline-none h-10 py-7 p-4 text-black font-gelasio mt-2  text-xl  "
            />
            <div className="flex flex-wrap  input-box">
              {blog?.tags?.map((tag, i) => {
                return (
                  <div
                    key={i}
                    className=" gap-9 flex flex-row  justify-evenly mt-3  items-center  p-2  mr-2 px-5 bg-white rounded-full "
                  >
                    <p
                      className=" outline-none"
                      onKeyDown={(e) => {
                        HandelkeyTagdown(e, i);
                      }}
                      onClick={(e) => {
                        AddEditable(e);
                      }}
                    >
                      {tag}
                    </p>
                    <button
                      onClick={() => removeTag(tag)}
                      className="  rounded-full "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <p className=" font-gelasio">
            {" "}
            {Taglimit - blog.tags.length} Tags left{" "}
          </p>
          <button className="btn-dark px-8 " onClick={(e) => handelPublish(e)}>
            Publish
          </button>
        </div>
      </section>
      {/* Fuck Israel */}
    </AnimationWrapper>
  );
};
export default Publishform;
