import { useCallback, useState } from "react";
import type { Route } from "./+types/home";
import me from "~/images/me.jpg";
import path from "path";
import { readdir, readFile } from "fs/promises";
import matter from "front-matter";
import { marked } from "marked";
import { orderBy, take } from "es-toolkit";
import { Link, useLoaderData } from "react-router";

export const loader = async () => {
  const postsPath = path.join(process.cwd(), "app", "posts", "blog");
  const files = await readdir(postsPath);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(postsPath, filename);
        const file = await readFile(filePath, "utf8");
        const { attributes, body } = matter<{
          title: string;
          excerpt: string;
          date: string;
        }>(file);

        return {
          slug: filename.replace(".md", ""),
          image: `/images/posts/${filename.replace(".md", ".jpg")}`,
          title: attributes.title,
          excerpt: attributes.excerpt,
          date: attributes.date,
          content: marked(body),
        };
      })
  );
  return { posts: take(orderBy(posts, ["date"], ["desc"]), 3) };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Russell Dunphy's Website" },
    { name: "description", content: "Blogs and pictures by Russell Dunphy" },
  ];
}

export default function Home() {
  const { posts } = useLoaderData<typeof loader>();
  const [on, setOn] = useState(true);
  const toggle = useCallback(() => setOn((prev) => !prev), []);

  return (
    <div className="flex flex-col-reverse min-h-full z-10" onClick={toggle}>
      <div className="bg-emerald-400 flex-grow flex z-0 flex-col">
        <div
          className={`w-full gap-4 flex flex-col transition-all ease-in-out duration-500 ${
            on ? "p-8 " : "p-2 delay-1000"
          }`}
        >
          <h1
            style={{
              lineHeight: "32px",
              marginBlockStart: "0",
              marginBlockEnd: "0",
            }}
            className={`w-full ${
              on ? "text-5xl" : "text-2xl delay-500"
            } text-white font-semibold flex transition-all ease-in-out duration-500`}
          >
            <div className="grow text-right" style={{ lineHeight: "32px" }}>
              Russell
            </div>
            <div
              style={{ lineHeight: "32px" }}
              className={
                on
                  ? "w-4 transition-all ease-in-out duration-1000 delay-1000"
                  : "w-32 transition-all ease-in-out duration-1000"
              }
            />
            <div className="grow text-left" style={{ lineHeight: "32px" }}>
              Dunphy
            </div>
          </h1>
          <nav className="w-full mt-4 mb-8">
            <ul className="flex flex-row justify-center gap-3 text-neutral-100 font-semibold">
              <li>
                <Link className="border-b-2 pb-1" to="/blog">
                  {" "}
                  Blog
                </Link>
              </li>
              <li>
                <Link className="border-b-2 pb-1" to="/pictures">
                  {" "}
                  Pictures
                </Link>
              </li>
              <li>
                <Link className="border-b-2 pb-1" to="/stories">
                  {" "}
                  Stories
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container mx-auto px-4">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="mb-4 bg-white rounded-md bg-opacity-50 overflow-hidden"
                >
                  <a href={`/posts/${post.slug}`}>
                    <div className="max-h-72 md:max-h-32 lg:max-h-56 xl:max-h-72 overflow-hidden">
                      <img src={post.image} className="w-full" />
                    </div>
                    <div className="p-4">
                      <div className="text-neutral-800 hover:underline font-semibold">
                        {post.title}
                      </div>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto text-white mb-8 flex-grow flex items-end">
          © Copyright Russell Dunphy {new Date().getFullYear()}
        </div>
      </div>
      <div
        className={`
         shrink-0 z-100 bg-pink-500 duration-1000 ease-in-out transition-all flex p-2 relative ${
           on ? "h-80 p-2 delay-500" : "h-24 flex delay-1000"
         }`}
      >
        <div
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            zIndex: "1000",
          }}
          className={
            on
              ? "rounded-full size-72 border-8 border-white my-auto transition-all ease-in-out duration-1000 delay-1000 mx-auto"
              : "rounded-full size-32 border-8 border-white my-auto transition-all ease-in-out duration-1000 mx-auto"
          }
        />
      </div>
    </div>
  );
}
