import axios from "axios";
import { useParams } from "react-router-dom";
import InPageNavigation from "../components/InPageNavigation.component";
import AnimationWrapper from "../common/animation-page";
import Loader from "../components/loader.component";
import BlogCard from "../components/BlogCard.component";
import NoDataMessage from "../components/noDataMessage.component";
import LoadMoreBlogs from "../components/LoadMoreBlogs.component";
import type { TBlog } from "../pages/Home.page";
import { SetStateAction, useEffect, useState } from "react";
import FilterPagination from "../components/fitter_pagination";

const SeachPage = () => {
  const { query } = useParams();
  const [blog, setblog] = useState<TBlog | null>(null);

  const searching = ({page = 1 ,new_Array = false}) => {
    axios.post(import.meta.env.VITE_SERVER_DOMAIN + `/search`,{query,page})
    .then(async ({data}) => {
      const formData = await FilterPagination({
        countRoute: "/search-count-docs",
        data: data,
        state: blog,
        new_Array,
        page,
        date_to_send: {query} as Record<string, string>,
         // Add this line

      });
      setblog(formData as SetStateAction<TBlog | null>);
      })
  
  };

  const resetState = () => {
    setblog(null);
  }
  useEffect(() => {
    resetState()
    searching({page: 1, new_Array: true});

  }, [query]);

  return (
    <section className="h-cover flex judtify-center gap-10 ">
      <div className="w-full">
        <InPageNavigation
          defaulthidden={["Accounts Matched"]}
          routes={[`search result for ${query} `, "Accounts Matched"]}
        >
          <>
            {blog === null ? (
              <Loader />
            ) : blog.results.length > 0 ? (
              blog.results.map((blog, i: number) => {
                return (
                  <AnimationWrapper
                    key={i}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  >
                    <BlogCard blog={blog} key={i} />
                  </AnimationWrapper>
                );
              })
            ) : (
              <NoDataMessage />
            )}
            <LoadMoreBlogs
              state={blog || { results: [], page: 0, totalDocs: 0 }}
              fetchDataFun={searching}
            />
          </>
        </InPageNavigation>
      </div>
    </section>
  );
};

export default SeachPage;
