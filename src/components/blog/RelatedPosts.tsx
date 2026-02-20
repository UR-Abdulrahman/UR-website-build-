import BlogCard from "./BlogCard";
import type { BlogPostMeta } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-white text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
