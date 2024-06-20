import { TBlog } from "../pages/Home.page";

type TLoadMore = {
  fetchDataFun: ({ page }: { page: number }) => void;
  state: TBlog;
};

const LoadMoreBlogs = ({ state, fetchDataFun }: TLoadMore) => {
  if (state !== null && state.totalDocs > state.results.length) {
    return (
      <button
        onClick={() => fetchDataFun({ page: state.page + 1 })}
        className=" text-dark-grey p-2 px-3 hover:bg-grey/30 rounded-md flex items-center gap-2  "
      >
        Load More
      </button>
    );
  }
};

export default LoadMoreBlogs;
