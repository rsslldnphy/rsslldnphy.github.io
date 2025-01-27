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
    thumbnail: string;
  };
}) => {
  return (
    <li className="mb-4 bg-white rounded-md bg-opacity-50 overflow-hidden">
      <Link to={`/${post.type}/${post.slug}`}>
        <div
          className="h-72 md:h-32 lg:56 xl:h-72 overflow-hidden"
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {post.title && (
          <div className="p-4">
            <div className="text-neutral-800 hover:underline font-semibold">
              {post.title}
            </div>
            <div className="text-gray-600">{post.excerpt}</div>
          </div>
        )}
      </Link>
    </li>
  );
};
