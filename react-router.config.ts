import type { Config } from "@react-router/dev/config";
import { readdirSync } from "fs";
import { basename } from "path";

function getMarkdownPaths(): string[] {
  const directories = [
    "app/posts/blog",
    "app/posts/pictures",
    "app/posts/stories",
  ];

  const paths: string[] = [];

  for (const dir of directories) {
    try {
      const files = readdirSync(dir);

      const markdownFiles = files.filter((file) => file.endsWith(".md"));

      const formattedPaths = markdownFiles.map((file) => {
        const category = dir.split("/").pop(); // Get the last part of the directory path
        const nameWithoutExtension = basename(file, ".md");
        return `/${category}/${nameWithoutExtension}`;
      });

      paths.push(...formattedPaths);
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error);
    }
  }

  return paths;
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  async prerender() {
    return ["/", "/blog", "/pictures", "/stories", ...getMarkdownPaths()];
  },
} satisfies Config;
