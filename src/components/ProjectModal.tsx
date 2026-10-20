import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#07172D] border border-[#D4AF37]/50 shadow-2xl overflow-hidden text-left z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#05080F]/80 text-white hover:bg-black transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07172D] via-[#07172D]/40 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded bg-[#05080F]/90 text-[10px] font-mono tracking-wider text-[#F3D77A] uppercase border border-[#D4AF37]/30">
              {project.clientType}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 border-b border-white/10 pb-4">
            <div>
              <span className="text-slate-400">Category: </span>
              <strong className="text-white">{project.category}</strong>
            </div>
            <span>·</span>
            <div>
              <span className="text-slate-400">Genre: </span>
              <strong className="text-white">{project.genre}</strong>
            </div>
          </div>

          {/* Ethical Notice */}
          <div className="p-3.5 rounded-xl bg-[#05080F] border border-[#D4AF37]/20 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#D4AF37]">Demonstration Disclosure: </strong>
              {project.outcomesNote}
            </p>
          </div>

          {/* Challenge & Strategy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-[#05080F]/60 border border-white/5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                The Publishing Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#05080F]/60 border border-white/5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                The Strategic Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Key Deliverables Built */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Project Deliverables Engineered
            </h4>
            <div className="space-y-2">
              {project.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {project.tags.map((t, idx) => (
              <span key={idx} className="text-[11px] font-mono text-slate-300">
                #{t}
              </span>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded text-xs text-slate-400 hover:text-white transition-colors"
            >
              Back to Portfolio
            </button>
            <button
              onClick={() => {
                onInquire(project.category);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 shadow-md"
            >
              <span>Request Similar Campaign Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
