import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BlogArticle } from '../types';
import { BLOG_ARTICLES } from '../data/content';

interface BlogSectionProps {
  onReadArticle: (article: BlogArticle) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Book Marketing Tips',
    'Author Branding',
    'Book Launch Planning',
    'Book Trailer Ideas',
    'Book Market Research',
    'Self-Publishing Promotion',
  ];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#05080F] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span>Literary Intelligence &amp; Playbooks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Author Resources &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Publishing Insights</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Practical guides, marketing frameworks, and branding strategies designed to demystify book promotion for independent and published authors.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#05080F]'
                  : 'bg-[#07172D] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="cursor-pointer p-6 rounded-2xl bg-[#07172D]/70 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#07172D] transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                {/* Unboxed Metadata Line with typographic separators (anti-slop rule) */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-[#D4AF37] font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{article.readTime}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{article.publishedDate}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F3D77A] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {/* Key takeaway preview */}
                <div className="p-3 rounded-lg bg-[#05080F]/60 border border-white/5 space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37]">
                    Key Takeaway Preview:
                  </p>
                  <p className="text-xs text-slate-300 italic line-clamp-2">
                    &ldquo;{article.keyTakeaways[0]}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  By {article.authorName}
                </div>
                <span className="text-xs font-semibold text-[#D4AF37] group-hover:underline flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-12 p-8 rounded-xl bg-[#07172D] border border-white/10 text-center max-w-md mx-auto space-y-3">
            <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h4 className="text-base font-serif font-bold text-white">No articles matched your search</h4>
            <p className="text-xs text-slate-400">Try adjusting your keyword or reset filters to browse all publishing guides.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded bg-white/10 text-xs text-white hover:bg-white/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
