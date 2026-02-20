"use client";

import { useState, useMemo } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSearch from "@/components/blog/BlogSearch";
import TagFilter from "@/components/blog/TagFilter";
import CTABlock from "@/components/sections/CTABlock";

interface BlogIndexClientProps {
  posts: BlogPostMeta[];
  allTags: string[];
}

const PER_PAGE = 9;

export default function BlogIndexClient({ posts, allTags }: BlogIndexClientProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  const paginated = filtered.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  const featured = posts[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0612] to-[#06040A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#E8371B]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            The Gym Owner&apos;s Playbook
          </p>
          <h1 className="text-h1 text-white mb-6 max-w-3xl mx-auto">
            Growth Strategies for Fitness Studio Owners
          </h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto">
            Weekly insights on ads, lead generation, member retention, and scaling your
            studio — from people who live and breathe fitness marketing.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && !search && !activeTag && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-10">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-4">
            Featured Post
          </p>
          <BlogCard post={featured} featured />
        </section>
      )}

      {/* Search & filter */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 sticky top-20 z-20 bg-[#06040A]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-72 flex-shrink-0">
            <BlogSearch value={search} onChange={(v) => { setSearch(v); setPage(1); }} />
          </div>
          <div className="flex-1">
            <TagFilter
              tags={allTags}
              activeTag={activeTag}
              onTagChange={(t) => { setActiveTag(t); setPage(1); }}
            />
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/30 text-xl mb-2">No posts found</p>
            <p className="text-white/20 text-sm">
              Try a different search or clear the tag filter.
            </p>
          </div>
        ) : (
          <>
            <p className="text-white/30 text-xs mb-6">
              {filtered.length} post{filtered.length !== 1 ? "s" : ""}
              {search ? ` for "${search}"` : ""}
              {activeTag ? ` tagged "${activeTag}"` : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(search || activeTag ? filtered : rest).slice(0, page * PER_PAGE).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="bg-[#111118] border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-full px-8 py-3 text-sm font-medium transition-all duration-200"
                >
                  Load more posts
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <CTABlock
        headline="Get 25+ New Members Per Month"
        subhead="Book a free strategy call and we'll show you exactly how — using the same system that's generated $46.3M for 100+ studios."
        variant="subtle"
      />
    </>
  );
}
