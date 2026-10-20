import React from 'react';
import { ArrowRight, Feather, BookMarked, Sparkles } from 'lucide-react';
import { WHO_WE_HELP } from '../data/content';

interface WhoWeHelpProps {
  onInquireForStage: (stageTitle: string) => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onInquireForStage }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'first-time-authors':
        return Feather;
      case 'published-independent-authors':
        return BookMarked;
      case 'launching-authors':
        return Sparkles;
      default:
        return Feather;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#05080F] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span>Tailored For Your Literary Stage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Who We Partner With <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Across the World.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every author’s trajectory is unique. We provide custom-fitted strategies whether you are debuting your first manuscript or revitalizing a backlist catalog.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP.map((item) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#07172D]/70 border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-[#05080F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#F3D77A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#D4AF37] mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Typical Bottlenecks */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Common Author Obstacles:
                    </p>
                    {item.challenges.map((ch, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-slate-500 font-mono">―</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tailored Solutions */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                      Recommended Strategy:
                    </p>
                    {item.solutions.map((sol, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={() => onInquireForStage(item.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-semibold tracking-wider uppercase text-white hover:text-[#05080F] border border-[#D4AF37]/40 hover:bg-gold-gradient transition-all"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
