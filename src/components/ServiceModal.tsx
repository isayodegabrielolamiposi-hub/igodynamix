import React from 'react';
import { X, CheckCircle2, Clock, Users, ArrowRight, Info } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#07172D] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-left z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          {/* Header */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#F3D77A] mt-1">
              {service.benefitStatement}
            </p>
          </div>

          {/* Detailed Narrative */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.longDesc}
          </p>

          {/* Research Notice if applicable */}
          {service.isResearchNotice && (
            <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/40 flex items-start gap-2.5 text-xs text-amber-200">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Important Publishing Notice:</strong> Market research findings represent strategic recommendations grounded in available reader data and comp titles. I.G.O. DYNAMIX does not guarantee sales numbers or commercial rankings.
              </span>
            </div>
          )}

          {/* Deliverables List */}
          <div className="p-4 rounded-xl bg-[#05080F] border border-white/10 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Guaranteed Deliverables Included
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Sequence */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Execution Sequence
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.workflow.map((wf, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#05080F]/50 border border-white/5 flex items-center gap-2 text-slate-300">
                  <span className="font-mono text-[#D4AF37] font-semibold">{idx + 1}.</span>
                  <span>{wf}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta details */}
          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Estimated Timeline: {service.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <span className="truncate max-w-xs">{service.suitableFor}</span>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(service.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 shadow-md"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
