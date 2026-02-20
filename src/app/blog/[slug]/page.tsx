import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import Badge from "@/components/ui/Badge";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-20">
      {/* Back */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Post header */}
      <header className="max-w-4xl mx-auto px-4 md:px-8 pb-10">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="accent" />
          ))}
        </div>
        <h1 className="text-h1 text-white mb-6 leading-tight">{post.title}</h1>
        <p className="text-white/50 text-xl leading-relaxed mb-8">{post.description}</p>
        <div className="flex items-center gap-4 text-white/30 text-sm border-t border-white/5 pt-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E8371B]/20 flex items-center justify-center text-xs text-[#E8371B] font-bold">
              {post.author.charAt(0)}
            </div>
            <span>{post.author}</span>
          </div>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Post body */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 pb-10">
        <div className="prose-ur">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <BlogCTA variant="mid" />

        {related.length > 0 && <RelatedPosts posts={related} />}

        <BlogCTA variant="end" />
      </article>
    </div>
  );
}
