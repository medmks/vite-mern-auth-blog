import axios from "axios";
import type { blog } from "../pages/Home.page";
import type { TBlog } from "../pages/Home.page";

type Tfilter = {
  new_Array: boolean;
  state: TBlog | null;
  data: blog[];
  page: number;
  countRoute: string;
  date_to_send: Record<string, string>;
};
const FilterPagination = async ({
  new_Array = false,
  state,
  data,
  page,
  countRoute,
  date_to_send = {},
}: Tfilter): Promise<TBlog> => {
  let obj: TBlog = { results: [], page: 0, totalDocs: 0 };
  if (state !== null && !new_Array) {
    obj = { ...state, results: [...state.results, ...data], page: page };
  } else {
    await axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + countRoute, date_to_send)
      .then(({ data: { totalDocs } }) => {
        obj = { results: data, page: 1, totalDocs };
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return obj;
};
export default FilterPagination;
