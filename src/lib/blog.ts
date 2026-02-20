import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  featuredImage?: string;
  readingTime: string;
  content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseFrontmatter(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    author: data.author ?? "Untapped Revenue",
    featuredImage: data.featuredImage,
    readingTime: rt.text,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const post = parseFrontmatter(slug);
      if (!post) return null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = post;
      return meta;
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  return parseFrontmatter(slug);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
