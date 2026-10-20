import React, { useState } from 'react';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioItem, PortfolioCategory } from '../types';
import { PORTFOLIO_ITEMS } from '../data/content';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');

  const categories: PortfolioCategory[] = [
    'All',
    'Book Promotional Design',
    'Author Branding',
    'Book Trailers',
    'Book Launch Campaigns',
    'Social Media Campaigns',
    'Market Research Samples',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#07172D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span>Creative Showcase &amp; Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Selected Creative Work &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Concept Demonstrations</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our creative standards across visual identity, 3D mockups, video trailers, and market dossiers. Transparently labeled sample concepts designed for author inspiration.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2 py-2 px-3.5 rounded bg-[#05080F] border border-[#D4AF37]/20 shrink-0">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Project Vault</span>
          </div>
        </div>

        {/* Category Filters (Interactive buttons, properly styled) */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'bg-gold-gradient text-[#05080F] shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#05080F]/80 text-slate-300 hover:text-white border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => {
            const isVideo = item.category === 'Book Trailers';

            return (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group cursor-pointer rounded-2xl bg-[#05080F] border border-white/10 hover:border-[#D4AF37]/60 overflow-hidden shadow-xl transition-all duration-300 flex flex-col text-left"
              >
                {/* Visual Preview Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-black/20" />

                  {/* Concept Badge (Clear & Ethical) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#05080F]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono tracking-wider text-[#F3D77A] uppercase">
                    Sample Concept
                  </div>

                  {/* Video Play Indicator */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37]/90 text-[#05080F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Corner Expand Action */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#05080F]/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Quiet metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-[#D4AF37] font-medium">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.genre}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#F3D77A] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#D4AF37] group-hover:underline flex items-center gap-1">
                      View Project Brief
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.deliverables.length} Deliverables
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
