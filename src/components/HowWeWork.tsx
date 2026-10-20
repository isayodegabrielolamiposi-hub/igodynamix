import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { HOW_WE_WORK } from '../data/content';

interface HowWeWorkProps {
  onPlanMarketing: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onPlanMarketing }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#07172D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span>Methodology &amp; Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            How We Move Your Book From <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Manuscript to Momentum.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A transparent, structured four-phase partnership that respects your artistic vision while applying proven publishing promotional disciplines.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_WE_WORK.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#05080F]/80 border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Clean Editorial Numbering (no mechanical //) */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-semibold text-[#D4AF37]">
                    Phase {item.step}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F3D77A] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs font-medium text-[#D4AF37]">
                  {item.headline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Focus points */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  {item.focusPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Phase Completion</span>
                <Check className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#05080F] via-[#07172D] to-[#05080F] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-serif font-bold text-white">
              Ready to start your structured marketing roadmap?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your book details and receive our preliminary strategic assessment.
            </p>
          </div>

          <button
            onClick={onPlanMarketing}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap shrink-0 active:scale-95"
          >
            <span>Let&apos;s Plan Your Book Marketing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
