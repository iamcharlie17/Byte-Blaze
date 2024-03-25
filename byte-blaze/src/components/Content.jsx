import { useLoaderData } from "react-router-dom";
import placeholderImage from '../../Assets/404.jpg';



const Content = () => {
  const blog = useLoaderData();

  return (
    <div className="max-w-full mx-auto group border-opacity-20 border-2 border-primary p-4  ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={blog.cover_image || placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {blog.tags.map(tag => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog.title}
        </h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis corrupti est voluptate quod adipisci, delectus minus facere accusamus, earum molestiae ratione beatae eveniet autem fugit sit laudantium quas. Dicta aliquam explicabo error impedit quasi ipsa aut sapiente minus consequuntur. Aliquam dolorem culpa suscipit accusantium, inventore provident in doloremque repudiandae, optio mollitia animi a voluptas esse? At in neque autem accusamus aliquam molestias omnis, dicta quisquam eum cumque corrupti quos fugiat modi animi esse quasi soluta! Sunt beatae debitis rem! Fuga eum consectetur unde, non tempore quaerat provident aperiam beatae ea neque incidunt eaque, sequi odio, dolores repudiandae expedita eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, amet perferendis incidunt consectetur distinctio dicta natus esse fugit vel obcaecati aliquam enim quod in at molestias ipsum, velit ea magnam officiis neque voluptates! Veniam minus perferendis explicabo natus libero repellendus, autem aliquam exercitationem ipsa inventore doloremque commodi harum assumenda blanditiis reprehenderit placeat esse fugiat facere quaerat asperiores totam tempora eligendi quisquam officiis! Eveniet cumque perferendis quaerat ipsa adipisci deserunt animi, perspiciatis dolore ipsum aperiam, corporis iste vero culpa nesciunt architecto quo fugit! Enim quasi accusamus reprehenderit veniam nihil voluptas atque voluptate porro quas minus iusto earum, ipsa nesciunt commodi sint!</p>
      </div>
    </div>
  );
};

export default Content;