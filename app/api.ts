import path from "path";
import { orderBy } from "es-toolkit";
import { marked } from "marked";
import { readdir, readFile } from "fs/promises";
import matter from "front-matter";

export const getPosts = async (type: "blog" | "pictures" | "stories") => {
  const postsPath = path.join(process.cwd(), "app", "posts", type);
  const files = await readdir(postsPath);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(postsPath, filename);
        const file = await readFile(filePath, "utf8");
        const { attributes } = matter<{
          title: string;
          excerpt: string;
          date: string;
        }>(file);

        return {
          slug: filename.replace(".md", ""),
          type: type,
          image: `/images/${type}/${filename.replace(".md", ".jpg")}`,
          title: attributes.title,
          excerpt: attributes.excerpt,
          date: attributes.date,
          thumbnail: `/images/${type}/thumbnails/${filename.replace(
            ".md",
            "_thumb.jpg"
          )}`,
        };
      })
  );
  return orderBy(posts, ["date"], ["desc"]);
};

export const getPost = async (
  type: "blog" | "pictures" | "stories",
  slug: string
) => {
  const filename = path.join("app", "posts", type, slug + ".md");
  const file = await readFile(filename, "utf-8");

  const {
    attributes: { image_credit, ...attributes },
    body,
  } = matter<{
    title: string;
    excerpt: string;
    date: string;
    content: string;
    image_credit?: string;
  }>(file);

  return {
    slug,
    type,
    image: `/images/${type}/${filename.replace(".md", ".jpg")}`,
    imageCredit: image_credit,
    ...attributes,
    content: await marked(body),
    thumbnail: `/images/${type}/thumbnails/${filename.replace(
      ".md",
      "_thumb.jpg"
    )}`,
  };
};
