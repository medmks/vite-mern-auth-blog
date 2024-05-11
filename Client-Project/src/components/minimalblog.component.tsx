import { Link } from "react-router-dom";
import { Getthedate } from "../common/date";

const Minimalblog = ({ trends, index }: { trends, index: number }) => {

  return (
    <Link to={"/"} className="flex gap-5 mb-5 ">
      <h1 className="blog-index">{index < 10 ? "0" + (index + 1) : index}</h1>
      <div>
        <div className=" flex flex-row gap-2 items-center mb-7 ">
          <img
            src="https://media.gettyimages.com/id/181048438/fr/photo/maroc-dans-une-mosqu%C3%A9e.jpg?s=612x612&w=gi&k=20&c=Ahq7S3qxdrl2CHhUwOnHUpA5ICz8yIc4N_oZ5IhM-Dw="
            className="w-6 h-6 rounded-full"
            alt=""
          />
          <p className=" line-clamp-1">
            {trends.author.name} @{trends.author.name}
          </p>
          <p className="min-w-fit"> {Getthedate(trends.createdAt)}</p>
        </div>
        <h1 className=" blog-title">{trends.title}</h1>
      </div>
    </Link>
  );
};

export default Minimalblog;
