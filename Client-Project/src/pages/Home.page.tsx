import axios from "axios";
import AnimationWrapper from "../common/animation-page";
import InPageNavigation from "../components/InPageNavigation.component";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.component";
import Minimalblog from "../components/minimalblog.component";
import { ActiveTab } from "../components/InPageNavigation.component";
import NoDataMessage from "../components/noDataMessage.component";
import Loader from "../components/Loader.component";

const subjects = [
  "التفسير القرآني",
  "السيرة النبوية",
  "الفكر الإسلامي والفلسفة",
  "التاريخ والحضارة",
  "السياسة والاقتصاد",
  "البيئة والاستدامة",
  "AI",
  "التربية والتعليم",
  "الأدب والشعر واللغة",
];
export type blog = {
  createdAt: string;
  activity: {
    total_likes: number;
    total_comments: number;
    total_reads: number;
    total_parent_comments: number;
  };
  _id: string;
  title: string;
  banner: string;
  description: string;
  tags: string[];
  author: {
    _id: string;
    name: string;
  };
  blog_id: string;
};
export type TrendyBlog = Omit<blog, "banner" & "activity">;

const HomePage = () => {
  const [blog, setblog] = useState<blog[] | null>([]);
  const [trendingsblog, settrendsblog] = useState<TrendyBlog[] | null>([]);
  const [HomePage, setHomePage] = useState<string>("home");
  const FetchLatestBlog = () => {
    axios
      .get(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", {
        headers: {},
      })
      .then(({ data }) => {
        setblog(data);
      });
  };
  const FetchTrendyBlogs = () => {
    axios
      .get(import.meta.env.VITE_SERVER_DOMAIN + "/trendy-blogs", {
        headers: {},
      })
      .then(({ data }) => {
        settrendsblog(data);
      });
  };
  const SearchForBlogs = () => {
    axios
    .post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blog", {tag:HomePage})
    .then(({ data }) => {
      setblog(data);
    });
  }  
  useEffect(() => {
    ActiveTab.current?.click();


    if (HomePage === "home") {
      FetchLatestBlog();
    }
    if (trendingsblog) {
      FetchTrendyBlogs();
    }
  }, [HomePage]);

  const handelclicksubjects = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setblog(null);
    if (e.target instanceof HTMLButtonElement) {
      const categorie = e.target.innerText;
      console.log(categorie);
      if (categorie === HomePage) {
        setHomePage("home");
        return;
      }
else{
  setHomePage(categorie);

  SearchForBlogs()
}

      ActiveTab.current?.click();

      console.log(HomePage);
    }
  };
  return (
    <AnimationWrapper>
      <section className=" h-cover flex justify-center gap-10">
        <div className="w-full">
          <InPageNavigation
            defaulthidden={["trending blogs"]}
            routes={["home", "trending blogs"]}
          >
            <>

              {blog === null ? (
                <Loader />
              ) :
              blog.length > 0 ?
              (
                blog.map((blog, i: number) => {
                  return (
                    <AnimationWrapper
                      key={i}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    >
                      <BlogCard blog={blog} key={i} />
                    </AnimationWrapper>
                  );
                })
              )
            :<NoDataMessage/>
            }
            </>
            {trendingsblog === null
              ? "waiting for data"
              : trendingsblog.map((trends, i: number) => {
                  return (
                    <AnimationWrapper
                      key={i}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    >
                      <Minimalblog trends={trends} index={i} key={i} />
                    </AnimationWrapper>
                  );
                })}
          </InPageNavigation>

          {/*latest blogs  */}
        </div>
        <div className=" hidden md:flex min-w-[40%] lg:min-w-[400px] max-w-min border-r  border-grey pr-8 pt-3">
          <div className="flex flex-col gab-10 ">
            <h1 className=" font-medium text-xl mb-4  ">مواضيع من اهتماماتك</h1>
            <div className="flex flex-wrap">
              {subjects.map((sub: string, i) => {
                return (
                  <button
                    onClick={handelclicksubjects}
                    key={i}
                    className={
                      " tag m-1  " +
                      (HomePage === sub ? " bg-black text-white" : " ")
                    }
                  >
                    {sub}
                  </button>
                );
              })}
            </div>

            <div>
              <h1 className=" flex items-start gap-3 font-medium text-xl mb-8 mt-5  ">
                الاكثر مشاهدة
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
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </h1>

              {trendingsblog === null ? (
                <Loader />
              ) : (
                trendingsblog.map((trends, i: number) => {
                  return (
                    <AnimationWrapper
                      key={i}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    >
                      <Minimalblog trends={trends} index={i} key={i} />
                    </AnimationWrapper>
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div>{/* Filter blogs */}</div>

      </section>
    </AnimationWrapper>
  );
};

export default HomePage;
