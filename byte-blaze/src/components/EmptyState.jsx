import { Link } from "react-router-dom";


const EmptyState = ({message}) => {
  return (
    <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center">
      <p>{message}</p>
      <Link to='/blogs'><button className="btn bg-primary text-white text-2xl ">Go to Blogs</button></Link>
    </div>
  );
};

export default EmptyState;