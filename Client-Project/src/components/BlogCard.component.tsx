import type { TBlog } from "../pages/Home.page";
import { Getthedate } from "../common/date";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }: TBlog) => {
  return (
    <Link
      className="flex items-center  gap-8 border-b border-grey pb-4 mb-4"
      to={"/"}
    >
      <div className=" w-full">
        <div className="flex gap-2 items-center mb-7 ">
          <img
            src="https://i.pinimg.com/474x/22/8a/70/228a70c4f16df072a6fd837f974b2ede.jpg"
            className="w-6 h-6 rounded-full object-cover"
            alt=""
          />
          <p className="line-clamp-1 ">
            {blog.author.name} @{blog.author.name}
          </p>
          <p className="min-w-fit">{Getthedate(blog.createdAt)}</p>
        </div>
        <h1 className="blog-title">{blog.title}</h1>
        <p className="my-3 text-2xl font-gelasio leading-7 max-sm:hidden md:max-[1101px]:hidden line-clamp-2 ">
          {blog.description}
        </p>
        <div className="flex gap-4 mt-7">
          <span className=" btn-light py-1 px-4">{blog.tags[0]}</span>
          <span className=" flex ml-3 items-center gap-2 text-dark-grey ">
            {blog.activity.total_likes}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className=" h-28 aspect-square bg-white">
        <img
          src={blog.banner}
          alt=""
          className="h-full w-full  aspect-square object-cover"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
