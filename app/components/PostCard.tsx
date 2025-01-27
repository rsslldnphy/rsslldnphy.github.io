import { Link } from "react-router";

export const PostCard = ({
  post,
}: {
  post: {
    slug: string;
    type: string;
    thumb?: string;
    image: string;
    title?: string;
    excerpt?: string;
  };
}) => {
  return (
    <li className="mb-4 bg-white rounded-md bg-opacity-50 overflow-hidden">
      <div className="max-h-72 md:max-h-32 lg:max-h-56 xl:max-h-72 overflow-hidden">
        <Link to={`/${post.type}/${post.slug}`}>
          <img src={post.image} className="w-full" />
        </Link>
      </div>
      {post.title && (
        <div className="p-4">
          <Link
            to={`/${post.type}/${post.slug}`}
            className="text-neutral-800 hover:underline font-semibold"
          >
            {post.title}
          </Link>
          <div className="text-gray-600">{post.excerpt}</div>
        </div>
      )}
    </li>
  );
};
