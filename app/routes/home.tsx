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
      <div className="bg-emerald-400 flex-grow flex z-0">
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
            className={`w-full mb-4 ${
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
          <nav className="w-full my-4">
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
          <div className="container mx-auto p-8">
            <ul className="grid grid-cols-3 gap-4 items-stretch">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="mb-4 bg-white rounded-md bg-opacity-50 overflow-hidden"
                >
                  <img src={post.image} />
                  <div className="p-4">
                    <a
                      href={`/posts/${post.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </a>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        © Copyright Russell Dunphy {new Date().getFullYear()}
      </div>
      <div
        className={
          on
            ? "shrink-0 z-100 bg-pink-500 h-1/3 flex items-center transition-all ease-in-out duration-1000 p-2 delay-500"
            : "shrink-0 z-100 bg-pink-500 h-24 flex items-start transition-all ease-in-out duration-1000 delay-1000 p-2"
        }
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
