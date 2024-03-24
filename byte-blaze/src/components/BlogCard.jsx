import { Link } from "react-router-dom";
import placeholderImage from "../../Assets/404.jpg"

const BlogCard = ({blog}) => {
  console.log(blog)
  
  return (
    <Link to={`/blog/${blog.id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 border-primary hover:scale-105 hover:border-secondary "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={blog.cover_image || placeholderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog.title}
        </h3>
        <span className="text-xs ">January 21, 2021</span>
        <p>
         {blog.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;