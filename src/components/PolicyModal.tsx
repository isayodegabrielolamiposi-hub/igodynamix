import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BRAND } from '../data/content';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl rounded-2xl bg-[#07172D] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-left z-10 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200 space-y-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
              <Shield className="w-4 h-4" />
              <span>Legal Transparency</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Privacy Policy &amp; Data Ethics
            </h3>
            <p className="text-xs text-slate-400">
              Last updated: March 2026 · {BRAND.name}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h4 className="font-semibold text-white">1. Information We Collect</h4>
              <p>
                We collect personal information that you voluntarily submit through our book project inquiry forms, consultation requests, or newsletter signups (e.g., your name, email, manuscript details, and project objectives).
              </p>

              <h4 className="font-semibold text-white">2. Purpose of Processing</h4>
              <p>
                Your details are utilized strictly to formulate strategic marketing proposals, prepare author consultations, communicate project milestones, and deliver literary newsletters if explicitly opted into.
              </p>

              <h4 className="font-semibold text-white">3. Third-Party Disclosures &amp; Security</h4>
              <p>
                We never sell, rent, or trade author information, manuscript synopses, or email lists to third-party data brokers. All data handling complies with international data privacy standards (GDPR, UK Data Protection Act, and CCPA principles).
              </p>

              <h4 className="font-semibold text-white">4. Your Rights</h4>
              <p>
                You may request access to, correction of, or complete deletion of your project records at any time by writing to our verification desk at {BRAND.email}.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
              <FileText className="w-4 h-4" />
              <span>Service Terms</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Terms of Engagement &amp; Service Standards
            </h3>
            <p className="text-xs text-slate-400">
              Last updated: March 2026 · {BRAND.name}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h4 className="font-semibold text-white">1. Creative &amp; Marketing Scope</h4>
              <p>
                I.G.O. DYNAMIX provides author branding, promotional graphic design, book trailer production, campaign coordination, and literary market research. Written project agreements define the specific scope, deliverables, timeline, and revision bounds.
              </p>

              <h4 className="font-semibold text-white">2. No Guarantee of Commercial Outcomes</h4>
              <p>
                We do not guarantee specific unit sales, bestseller badges, or algorithmic placement on third-party book retail platforms. Commercial success depends on diverse market dynamics, reader tastes, and organic word-of-mouth. Our obligation is to execute high-caliber strategic marketing and creative assets.
              </p>

              <h4 className="font-semibold text-white">3. Intellectual Property Rights</h4>
              <p>
                Authors retain 100% full copyright, royalties, and ownership of their literary manuscripts, characters, and trademarks. Final delivered design assets and custom branding materials become the property of the author upon full settlement of contracted invoices.
              </p>

              <h4 className="font-semibold text-white">4. Invoicing &amp; Retainers</h4>
              <p>
                Services require agreed milestone retainers prior to commencement of creative production. Invoices are issued in specified international currencies (USD, GBP, EUR, CAD, AUD, NGN).
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
