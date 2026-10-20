import React, { useState } from 'react';
import { Check, ArrowRight, Clock, RefreshCw, XCircle, Plus, Sliders } from 'lucide-react';
import { PACKAGES, ADDONS } from '../data/content';

interface PackagesSectionProps {
  onRequestQuote: (packageName: string, selectedAddons: string[]) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onRequestQuote }) => {
  const [activePackageId, setActivePackageId] = useState<string>('book-visibility-campaign');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cinematic-trailer']);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const selectedPackage = PACKAGES.find((p) => p.id === activePackageId) || PACKAGES[1];

  return (
    <section className="py-20 lg:py-28 bg-[#05080F] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span>Service Frameworks &amp; Scopes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Curated Publishing &amp; <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Marketing Packages</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent, well-defined scopes with structured revision rounds, explicit deliverables, and no hidden assumptions. Every project begins with a bespoke quote.
          </p>
        </div>

        {/* 3 Core Packages Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => {
            const isHighlighted = pkg.id === 'book-visibility-campaign';
            const isSelectedForConfig = activePackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`p-7 sm:p-8 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#07172D] to-[#05080F] border-2 border-[#D4AF37] shadow-2xl shadow-black/80'
                    : 'bg-[#07172D]/60 border border-white/10 hover:border-[#D4AF37]/40'
                } ${isSelectedForConfig ? 'ring-2 ring-[#D4AF37]/50' : ''}`}
              >
                {/* Badge without static pill clutter */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#D4AF37] tracking-wider uppercase">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-[#D4AF37] font-medium leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white font-medium">Best For: </strong>
                    {pkg.bestFor}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Included Deliverables:
                    </p>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Policies: Revisions & Exclusions */}
                  <div className="pt-3 border-t border-white/5 space-y-2 text-xs text-slate-400">
                    <div className="flex items-start gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{pkg.revisionPolicy}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-400">
                      <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>Excludes: {pkg.exclusions.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      setActivePackageId(pkg.id);
                      onRequestQuote(pkg.name, selectedAddons);
                    }}
                    className={`w-full py-3 px-4 rounded text-xs font-semibold tracking-wider uppercase transition-all shadow-md ${
                      isHighlighted
                        ? 'bg-gold-gradient text-[#05080F] hover:opacity-95'
                        : 'text-white border border-[#D4AF37]/40 hover:bg-gold-gradient hover:text-[#05080F]'
                    }`}
                  >
                    Request a Quote
                  </button>

                  <button
                    onClick={() => setActivePackageId(pkg.id)}
                    className="w-full text-center text-xs text-slate-400 hover:text-[#D4AF37] transition-colors py-1 flex items-center justify-center gap-1.5"
                  >
                    <Sliders className="w-3 h-3" />
                    <span>Customize in Scope Builder</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Add-On Configurator */}
        <div className="mt-16 p-8 rounded-2xl bg-[#07172D] border border-[#D4AF37]/30 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase">
                <Sliders className="w-4 h-4" />
                <span>Interactive Scope &amp; Add-On Builder</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                Selected Base: <span className="text-[#F3D77A]">{selectedPackage.name}</span>
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Combine your chosen base package with high-impact creative add-ons for a tailored proposal.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-slate-300 mb-4">
              Optional High-Impact Add-Ons:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-[#05080F] border-[#D4AF37] text-white'
                        : 'bg-[#05080F]/50 border-white/10 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#05080F]'
                          : 'border border-white/20 bg-white/5'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3 h-3 text-slate-400" />}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">
                        {addon.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {addon.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span>Active Scope: </span>
              <strong className="text-white font-semibold">{selectedPackage.name}</strong>
              {selectedAddons.length > 0 && (
                <span className="text-slate-400"> + {selectedAddons.length} specialized add-on{selectedAddons.length > 1 ? 's' : ''}</span>
              )}
            </div>

            <button
              onClick={() => onRequestQuote(selectedPackage.name, selectedAddons)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 shadow-md active:scale-95 transition-all"
            >
              <span>Inquire with this Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
