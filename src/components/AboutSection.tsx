import React from 'react';
import { Target, Compass, Users2, Eye, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/content';

interface AboutSectionProps {
  onInquire: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onInquire }) => {
  const philosophies = [
    {
      icon: Target,
      title: 'Creativity with Purpose',
      desc: 'Every graphic, video trailer, and copy hook is designed to capture reader curiosity and compel action, not just look pretty.'
    },
    {
      icon: Compass,
      title: 'Strategy Before Promotion',
      desc: 'We map out your book’s specific comps, reader demographics, and timeline before spending time or money on outward campaigns.'
    },
    {
      icon: Users2,
      title: 'Readers at the Center',
      desc: 'True author longevity comes from cultivating an emotional resonance with genuine book lovers who advocate for your stories.'
    },
    {
      icon: Eye,
      title: 'Consistent Author Visibility',
      desc: 'Building a recognizable literary presence across profiles, websites, and reader touchpoints creates lasting memorability.'
    },
    {
      icon: ShieldCheck,
      title: 'Growth Built on Trust & Meaningful Connections',
      desc: 'Ethical, transparent marketing practices free from inflated claims or vanity metrics—prioritizing genuine community.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#07172D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span>About I.G.O. DYNAMIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            We Help Authors Move From <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Manuscript to Market Visibility.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            Every book has a story, but reaching the right readers requires more than publishing alone. I.G.O. DYNAMIX helps authors communicate the value of their work through thoughtful branding, creative promotional assets, coordinated campaigns, and audience-focused marketing strategies.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you are preparing to publish your first book or looking to build greater visibility for an existing title, we help you take a more strategic approach to your author journey.
          </p>
        </div>

        {/* Brand Philosophy Grid */}
        <div className="mt-16">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-6">
            Our Core Strategic Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#05080F]/70 border border-white/10 hover:border-[#D4AF37]/40 transition-colors text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#07172D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Strategic Action Callout */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#07172D] to-[#05080F] border border-[#D4AF37]/40 text-left flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs tracking-wider uppercase font-semibold text-[#D4AF37]">
                  {BRAND.supportingMessage}
                </span>
                <h4 className="text-xl font-serif font-semibold text-white">
                  Ready to amplify your literary presence?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Let us evaluate your current manuscript or backlist positioning with tailored strategic direction.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={onInquire}
                  className="w-full py-2.5 px-4 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 transition-opacity"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Founder & Creative Leadership Section */}
        <div className="mt-16 p-8 rounded-2xl bg-[#05080F] border border-[#D4AF37]/25 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-[#D4AF37] p-1.5 bg-[#07172D] shadow-2xl shadow-black/80 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#05080F]">
                  <img
                    src="/assets/aistudio/Professional_Corporate_Headshot_020d8a96.png"
                    alt="Founder & Creative Director of I.G.O. DYNAMIX"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Subtle gold glow ring on hover */}
                <div className="absolute inset-0 rounded-full border border-[#F3D77A]/40 pointer-events-none" />
              </div>
              <div className="mt-4 text-center">
                <span className="block text-sm font-serif font-bold text-white tracking-wide">
                  Founder &amp; Creative Strategist
                </span>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  I.G.O. DYNAMIX Leadership
                </span>
              </div>
            </div>

            {/* Founder Biography & Message Area */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                <span>Agency Leadership</span>
                <span className="text-[#D4AF37]">·</span>
                <span className="text-slate-300 font-mono">I.G.O. DYNAMIX</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                &ldquo;Every Author Deserves a Partner Who Believes in Their Words as Much as They Do.&rdquo;
              </h3>

              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>
                  I.G.O. DYNAMIX was founded on a simple observation: across the global publishing sphere, brilliant manuscripts frequently languish in obscurity not because of a lack of storytelling power, but because authors are left to navigate complex branding, digital algorithms, and promotional mechanics alone.
                </p>
                <p className="text-slate-400">
                  Our mission is to serve as a committed creative and strategic ally. We combine cinematic visual design, disciplined reader research, and clear promotional timelines so you can focus on writing while we ensure your stories find the audiences they were written for.
                </p>
              </div>

              <div className="pt-2 text-xs text-slate-400 border-t border-white/10 flex flex-wrap items-center gap-4">
                <span>International Representation &amp; Consulting</span>
                <span>·</span>
                <span>Strict Editorial Ethics</span>
                <span>·</span>
                <span>Direct Strategic Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
