import { Link } from "react-router-dom";
import placeholderImage from "../../Assets/404.jpg"
import { MdDeleteOutline } from 'react-icons/md';


const BlogCard = ({ blog, deleteAble, handleDelete }) => {
  // console.log(blog)
  const { id, cover_image, title, description } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 border-primary hover:scale-105 hover:border-secondary "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs ">January 21, 2021</span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteAble && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary p-3 rounded-full hover:bg-secondary group cursor-pointer hover:scale-105 -top-5 -right-5"
        >
          <MdDeleteOutline
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;