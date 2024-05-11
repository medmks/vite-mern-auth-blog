import axios from "axios";
type BlogTy = {
  latest: {
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
};

export const filterPagination = async ({
  createnewArray = false,
  data,
  state,
  page,
  CountRoute,
  data_to_sent,
}) => {
  let obj;

  if (state !== null && !createnewArray) {
    obj = { ...state, result: [...state.result, ...data], page: page };
  } else {
    await axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + CountRoute, data_to_sent)
      .then(({ data: { totaldocs } }) => {
        obj = { result: data, page: 1, totaldocs };
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return obj;
};
