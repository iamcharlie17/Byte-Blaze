import { useEffect, useState } from "react";
import { deleteBlog, gerBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const storedBlogs = gerBlogs()
    setBlogs(storedBlogs)
  }, [])

  const handleDelete = id => {
    deleteBlog(id);
    const storedBlogs = gerBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1) {
    return <EmptyState message='No Bookmarks Available'/>
  }
  return (
    <div className="grid justify-center sm:px-8 lg:px-12 py-8 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog => (
        <BlogCard
          handleDelete={handleDelete}
          deleteAble="true"
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;