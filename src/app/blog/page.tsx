import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog — Gym Growth Strategies for Studio Owners",
  description:
    "Weekly insights on gym marketing, lead generation, member retention, Facebook ads, and growing your fitness studio — from the team at Untapped Revenue.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <div className="pt-20">
      <BlogIndexClient posts={posts} allTags={allTags} />
    </div>
  );
}
