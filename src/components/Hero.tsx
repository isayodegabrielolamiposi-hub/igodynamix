import React from 'react';
import { ArrowRight, BookOpen, Globe2, Sparkles, Mail } from 'lucide-react';
import { BRAND } from '../data/content';

interface HeroProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onStartProject }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#05080F] overflow-hidden">
      {/* Subtle ambient lighting gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#07172D] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Official Brand Emblem & Slogan */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#D4AF37]/50 p-1 bg-[#07172D] shadow-xl shadow-black/60 shrink-0">
                <img
                  src="/assets/aistudio/I.G.O._Dynamix_Author_Branding_Emblem__1__60ca4b6f.png"
                  alt="I.G.O. DYNAMIX Official Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
                  <span className="w-3.5 h-px bg-[#D4AF37]" />
                  <span>I.G.O. DYNAMIX</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium tracking-wide">
                  Author Branding &amp; Book Marketing · We Make Authors Move.
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.08] text-balance">
              YOUR STORY <br />
              <span className="text-gold-gradient">DESERVES TO BE SEEN.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
              Strategic Book Marketing. Powerful Author Branding. Meaningful Reader Connections.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              At <strong className="text-slate-200 font-semibold">I.G.O. DYNAMIX</strong>, we help aspiring and published authors build recognizable author brands, promote their books, launch with confidence, and connect with readers worldwide.
            </p>

            {/* Two Clear Calls to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm font-semibold tracking-wide uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 transition-all shadow-lg shadow-[#D4AF37]/25 active:scale-95"
              >
                <span>Start Your Book Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm font-semibold tracking-wide text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-white/5 transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Subtle international trust notes & direct CTA email */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Global Author Client Base</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Creative Literary Studio</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-1.5 text-[#F3D77A] hover:underline font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Book & Studio Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_author_branding_1792502780135.jpg"
                alt="I.G.O. DYNAMIX luxury hardcover books with gold foil typography and author workspace"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Refined gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-[#07172D]/20 to-transparent" />

              {/* Overlay Badge Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#07172D]/90 backdrop-blur-md border border-[#D4AF37]/30 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-[#D4AF37] tracking-wider">
                    Creative Campaign Standard
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">I.G.O. DYNAMIX</span>
                </div>
                <p className="text-sm font-serif text-white font-medium">
                  {BRAND.supportingMessage}
                </p>
                <p className="text-xs text-slate-300">
                  From manuscript finishing to global reader discoverability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slim Service Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/20">
          <p className="text-center text-xs tracking-widest uppercase font-semibold text-slate-400 mb-4">
            Core Specialized Competencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-sm font-medium text-slate-300">
            <span className="hover:text-[#F3D77A] transition-colors cursor-pointer" onClick={onExploreServices}>
              Book Marketing
            </span>
            <span className="text-[#D4AF37]" aria-hidden="true">•</span>
            <span className="hover:text-[#F3D77A] transition-colors cursor-pointer" onClick={onExploreServices}>
              Author Branding
            </span>
            <span className="text-[#D4AF37]" aria-hidden="true">•</span>
            <span className="hover:text-[#F3D77A] transition-colors cursor-pointer" onClick={onExploreServices}>
              Book Trailers
            </span>
            <span className="text-[#D4AF37]" aria-hidden="true">•</span>
            <span className="hover:text-[#F3D77A] transition-colors cursor-pointer" onClick={onExploreServices}>
              Launch Campaigns
            </span>
            <span className="text-[#D4AF37]" aria-hidden="true">•</span>
            <span className="hover:text-[#F3D77A] transition-colors cursor-pointer" onClick={onExploreServices}>
              Market Research
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
