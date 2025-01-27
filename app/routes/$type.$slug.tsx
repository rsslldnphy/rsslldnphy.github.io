import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { getPost } from "../api";

export const loader = async ({
  params,
}: LoaderFunctionArgs<{
  slug: string;
  type: "blog" | "pictures" | "stories";
}>) => {
  const slug = params.slug!;
  const type = params.type! as "blog" | "pictures" | "stories";

  return {
    post: await getPost(type, slug),
  };
};
export default function Post() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto bg-white bg-opacity-50 px-16 py-12 max-w-4xl rounded-lg mb-8">
      <h1 className="text-4xl text-neutral-900 font-bold mb-8">{post.title}</h1>
      <figure className="mb-8">
        <img src={`/images/${post.type}/${post.slug}.jpg`} />
        {post.imageCredit && (
          <figcaption className="text-sm text-gray-600">
            {post.imageCredit}
          </figcaption>
        )}
      </figure>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
