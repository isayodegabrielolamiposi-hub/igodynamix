import React from 'react';
import {
  Megaphone,
  UserCheck,
  Palette,
  Users,
  Rocket,
  Film,
  Search,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onInquireWithService
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'book-promotion-marketing':
        return Megaphone;
      case 'author-branding-social-media':
        return UserCheck;
      case 'book-cover-promotional-design':
        return Palette;
      case 'reader-discovery-audience-growth':
        return Users;
      case 'book-launch-campaigns':
        return Rocket;
      case 'book-trailer-production':
        return Film;
      case 'book-market-research':
        return Search;
      default:
        return Megaphone;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#05080F] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span>Comprehensive Author Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Our Publishing &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Author Marketing Services</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Tailored strategic interventions designed to give your book the visibility, visual elegance, and readership it deserves.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2 py-2 px-3.5 rounded bg-[#07172D] border border-white/10 shrink-0">
            <span>7 Specialized Agency Disciplines</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = getIcon(service.id);
            const isFeatured = idx === 0 || idx === 4;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 text-left relative overflow-hidden group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#07172D] to-[#05080F] border border-[#D4AF37]/50 shadow-xl shadow-black/50'
                    : 'bg-[#07172D]/60 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#07172D]/90'
                }`}
              >
                {/* Gold subtle highlight line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Card Header with Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#05080F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F3D77A] transition-colors">
                    {service.title}
                  </h3>

                  {/* Benefit Statement */}
                  <p className="text-xs font-medium text-[#D4AF37] leading-snug">
                    {service.benefitStatement}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Sample Deliverables Preview */}
                  <div className="pt-2 space-y-1.5 border-t border-white/5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Core Deliverables:
                    </p>
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Research Disclaimer if Applicable */}
                  {service.isResearchNotice && (
                    <div className="p-2.5 rounded bg-amber-950/20 border border-amber-500/30 flex items-start gap-2 text-[11px] text-amber-200/90 leading-tight">
                      <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>Recommendations are data-informed strategic guidance, not commercial guarantees.</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3D77A] flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireWithService(service.title)}
                    className="px-3 py-1.5 rounded text-[11px] font-semibold tracking-wide uppercase text-white hover:text-[#05080F] border border-white/20 hover:border-[#D4AF37] hover:bg-gold-gradient transition-all"
                  >
                    Inquire
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
