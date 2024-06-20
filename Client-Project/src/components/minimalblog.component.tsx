import { Link } from "react-router-dom";
import { Getthedate } from "../common/date";
import type { TrendyBlog } from "../pages/Home.page";
/**
 * Renders a minimal blog component.
 *
 * @param {Object} props - The component props.
 * @param {TrendsBlogDocument} props.blog - The blog document.
 * @param {number} props.index - The index of the blog.
 * @return {JSX.Element} The rendered minimal blog component.
 */

const Minimalblog: React.FC<{ blog: TrendyBlog; index: number }> = (props: {
  blog: TrendsBlogDocument;
  index: number;
}): JSX.Element => {
  const { blog, index } = props;
  const authorName = blog.author.name as string;
  const blogTitle = blog.title;
  const blogCreatedDate = Getthedate(blog.createdAt);

  return (
    <Link to={"/"} className="flex gap-5 mb-5 ">
      <h1 className="blog-index">{index < 10 ? `0${index + 1}` : index + 1}</h1>
      <div>
        <div className="flex flex-row gap-2 items-center mb-7">
          <img
            src="https://media.gettyimages.com/id/181048438/fr/photo/maroc-dans-une-mosqu%C3%A9e.jpg?s=612x612&w=gi&k=20&c=Ahq7S3qxdrl2CHhUwOnHUpA5ICz8yIc4N_oZ5IhM-Dw="
            className="w-6 h-6 rounded-full"
            alt={authorName}
          />
          <p className="line-clamp-1">
            {authorName} @{authorName}
          </p>
          <p className="min-w-fit">{blogCreatedDate}</p>
        </div>
        <h1 className="blog-title">{blogTitle}</h1>
      </div>
    </Link>
  );
};

export default Minimalblog;
