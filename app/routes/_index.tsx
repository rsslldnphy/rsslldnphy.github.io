import {
  Link,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaArgs,
} from "react-router";
import { getPosts } from "../api";
import { PostCard } from "../components/PostCard";

export const loader = async ({}) => {
  const posts = await getPosts("blog");
  return { posts };
};

export function meta({}: MetaArgs) {
  return [
    { title: "Russell Dunphy's Website" },
    { name: "description", content: "Words and pictures by Russell Dunphy" },
  ];
}

export default function Home() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {posts.map((post) => (
          <PostCard key={post.type + post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
