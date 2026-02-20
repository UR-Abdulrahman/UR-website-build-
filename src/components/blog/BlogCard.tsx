import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className={`bg-[#111118] border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col hover:border-white/15 transition-all duration-300 ${
          featured ? "md:flex-row" : ""
        }`}
      >
        {/* Thumbnail placeholder */}
        <div
          className={`bg-gradient-to-br from-[#1A1A24] to-[#0A0810] flex items-center justify-center flex-shrink-0 ${
            featured ? "md:w-2/5 aspect-video md:aspect-auto" : "aspect-video"
          }`}
        >
          {post.featuredImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <div className="text-[#E8371B]/30 text-4xl mb-2">📝</div>
              <div className="text-white/10 text-xs font-mono">Untapped Revenue</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} label={tag} variant="accent" />
            ))}
          </div>

          <h2
            className={`text-white font-bold leading-snug mb-3 group-hover:text-[#E8371B] transition-colors duration-200 ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>

          <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
            {post.description}
          </p>

          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#E8371B]/20 flex items-center justify-center text-xs text-[#E8371B] font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="text-white/40 text-xs">{post.author}</span>
            </div>
            <div className="flex items-center gap-3 text-white/30 text-xs">
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
