import React, { useState } from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { BRAND } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!newsletterConsent) {
      setErrorMsg('Please consent to receiving author marketing insights.');
      return;
    }

    setSubscribed(true);
    setErrorMsg('');
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#05080F] text-slate-300 border-t border-[#D4AF37]/30 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/60 p-0.5 bg-[#07172D] shadow-md shrink-0">
                <img
                  src="/assets/aistudio/I.G.O._Dynamix_Author_Branding_Emblem__1__60ca4b6f.png"
                  alt="I.G.O. DYNAMIX Official Logo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <span className="font-brand-display text-xl font-bold tracking-wider text-white">
                {BRAND.name}
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Author Branding &amp; Book Marketing
            </p>

            <div className="space-y-1 pt-1">
              <p className="text-lg font-serif italic text-white">
                &ldquo;{BRAND.tagline}&rdquo;
              </p>
              <p className="text-sm font-medium text-slate-400">
                {BRAND.supportingMessage}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Serving aspiring, independent, and published authors worldwide with strategic branding, cinematic trailers, and reader discovery campaigns.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F3D77A] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#F3D77A] transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#F3D77A] transition-colors"
                >
                  Our Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-[#F3D77A] transition-colors"
                >
                  Author Resources &amp; Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#F3D77A] transition-colors"
                >
                  Contact &amp; Book Inquiry
                </button>
              </li>
            </ul>

            <div className="pt-2 space-y-2">
              <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Direct Desk
              </h5>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-xs text-[#F3D77A] hover:underline block truncate font-mono"
              >
                {BRAND.email}
              </a>
              <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold pt-1 mb-2">
                Connect
              </h5>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <a
                  href={BRAND.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Instagram
                </a>
                <span>·</span>
                <a
                  href={BRAND.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Facebook
                </a>
                <span>·</span>
                <a
                  href={BRAND.socialLinks.x}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column with Consent */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              The Author Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive monthly literary marketing playbooks, reader trend analyses, and promotional case studies directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscription confirmed. Welcome to The Author Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex items-stretch">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2.5 rounded-l-lg bg-[#07172D] border border-r-0 border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="px-4 rounded-r-lg bg-gold-gradient text-[#05080F] font-semibold text-xs hover:opacity-95 transition-opacity flex items-center justify-center shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={newsletterConsent}
                    onChange={(e) => setNewsletterConsent(e.target.checked)}
                    className="mt-0.5 accent-[#D4AF37] w-3.5 h-3.5 rounded"
                  />
                  <label htmlFor="newsletter-consent" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
                    I consent to receiving publishing insights and marketing advice from I.G.O. DYNAMIX. Unsubscribe anytime.
                  </label>
                </div>

                {errorMsg && (
                  <p className="text-[11px] text-rose-400">
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
            <span>·</span>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <Shield className="w-3 h-3 text-[#D4AF37]" />
              <span>International Literary Practice</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
