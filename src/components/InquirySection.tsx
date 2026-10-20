import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  Mail,
  MessageSquare,
  ShieldCheck,
  Calendar,
  AlertCircle,
  Download,
  Instagram,
  Facebook
} from 'lucide-react';
import { InquiryFormData, StoredInquiry } from '../types';
import { BRAND, SERVICES } from '../data/content';

interface InquirySectionProps {
  prefilledService?: string;
  prefilledPackage?: string;
  prefilledAddons?: string[];
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  prefilledService,
  prefilledPackage,
  prefilledAddons
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    country: '',
    website: '',
    bookTitle: '',
    genre: 'Fiction / Fantasy',
    publicationStatus: 'Ready for Publication',
    services: [],
    targetAudience: '',
    projectObjectives: '',
    budgetRange: 'Standard Investment ($1,500 - $3,000 USD)',
    preferredTimeline: 'Within 4-8 Weeks',
    additionalDetails: '',
    consent: false,
    honeypot: '', // Spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedInquiry, setSubmittedInquiry] = useState<StoredInquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, prefilledService]))
      }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({
        ...prev,
        additionalDetails: `Interested in Package: ${prefilledPackage}${
          prefilledAddons && prefilledAddons.length > 0
            ? ` with add-ons: ${prefilledAddons.join(', ')}`
            : ''
        }\n` + prev.additionalDetails
      }));
    }
  }, [prefilledPackage, prefilledAddons]);

  const handleServiceToggle = (title: string) => {
    if (formData.services.includes(title)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== title)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, title]
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name or professional pen name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Please indicate your country or primary operating region.';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one primary service of interest.';
    }

    if (!formData.projectObjectives.trim()) {
      newErrors.projectObjectives = 'Please briefly outline your key objectives for this project.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm that you agree to our privacy notice.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: StoredInquiry = {
        ...formData,
        id: `IGOD-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toISOString(),
      };

      // Persist to local storage database
      try {
        const existing = JSON.parse(localStorage.getItem('igo_dynamix_inquiries') || '[]');
        existing.push(newInquiry);
        localStorage.setItem('igo_dynamix_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Failed saving inquiry to localStorage', err);
      }

      setSubmittedInquiry(newInquiry);
      setIsSubmitting(false);
    }, 600);
  };

  const handleDownloadReceipt = () => {
    if (!submittedInquiry) return;
    const blob = new Blob([JSON.stringify(submittedInquiry, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${submittedInquiry.id}-inquiry-summary.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const mailtoUrl = submittedInquiry
    ? `mailto:${BRAND.email}?subject=Author%20Inquiry%20${submittedInquiry.id}%20-%20${encodeURIComponent(
        submittedInquiry.fullName
      )}&body=${encodeURIComponent(
        `Dear I.G.O. DYNAMIX Team,\n\nI have submitted my inquiry [Ref: ${
          submittedInquiry.id
        }].\n\nAuthor: ${submittedInquiry.fullName}\nEmail: ${
          submittedInquiry.email
        }\nCountry: ${submittedInquiry.country}\nBook Title: ${
          submittedInquiry.bookTitle || 'To be decided'
        }\nGenre: ${submittedInquiry.genre}\nServices: ${submittedInquiry.services.join(
          ', '
        )}\nObjectives: ${submittedInquiry.projectObjectives}\n\nLooking forward to scheduling our strategic consultation.`
      )}`
    : '';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#07172D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            <span className="w-5 h-px bg-[#D4AF37]" />
            <span>Consultation &amp; Project Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            LET&apos;S GET YOUR <br className="hidden sm:inline" />
            <span className="text-gold-gradient">BOOK MOVING.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tell us about your book, your audience, and your goals. We&apos;ll review your inquiry and discuss which services may be suitable for your project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Inquiry Form Column */}
          <div className="lg:col-span-8 p-7 sm:p-9 rounded-2xl bg-[#05080F] border border-[#D4AF37]/30 shadow-2xl text-left">
            {submittedInquiry ? (
              /* Success State */
              <div className="space-y-6 py-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Inquiry Successfully Registered
                    </h3>
                    <p className="text-xs font-mono text-[#F3D77A]">
                      Reference ID: {submittedInquiry.id}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#07172D] border border-white/10 space-y-3 text-xs text-slate-300">
                  <p>
                    Thank you, <strong className="text-white">{submittedInquiry.fullName}</strong>. Your project inquiry has been securely cataloged for senior strategist review.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 pt-2 border-t border-white/5 font-mono text-[11px]">
                    <div>Book Title: {submittedInquiry.bookTitle || 'Untitled / Manuscript'}</div>
                    <div>Target Genre: {submittedInquiry.genre}</div>
                    <div>Selected Services: {submittedInquiry.services.join(', ')}</div>
                    <div>Preferred Timeline: {submittedInquiry.preferredTimeline}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 shadow-md transition-all text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Confirmation Email</span>
                  </a>

                  <button
                    onClick={handleDownloadReceipt}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded text-xs font-semibold tracking-wider text-slate-300 hover:text-white border border-white/20 hover:border-[#D4AF37] transition-all"
                  >
                    <Download className="w-4 h-4 text-[#D4AF37]" />
                    <span>Save Submission Summary (.JSON)</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSubmittedInquiry(null)}
                    className="text-xs text-slate-400 hover:text-[#D4AF37] underline focus:outline-none"
                  >
                    Submit another inquiry or update details
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="author_verification_token"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name / Author Pen Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Alexandra Rivers"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., alexandra@authorstudio.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Country & Author Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Country or Region *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g., United Kingdom / Nigeria / United States"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.country ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.country && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.country}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Author Website or Social Profile (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="e.g., instagram.com/authorname or www.mybook.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Book Title & Genre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Book Title (If Available)
                    </label>
                    <input
                      type="text"
                      value={formData.bookTitle}
                      onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                      placeholder="e.g., Whispers in the Cathedral"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Book Genre *
                    </label>
                    <select
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Fiction / Fantasy & Sci-Fi">Fiction / Fantasy &amp; Sci-Fi</option>
                      <option value="Fiction / Thriller, Mystery & Crime">Fiction / Thriller, Mystery &amp; Crime</option>
                      <option value="Fiction / Historical & Literary">Fiction / Historical &amp; Literary</option>
                      <option value="Fiction / Romance & Women's Fiction">Fiction / Romance &amp; Women&apos;s Fiction</option>
                      <option value="Non-Fiction / Memoir & Biography">Non-Fiction / Memoir &amp; Biography</option>
                      <option value="Non-Fiction / Business, Leadership & Personal Growth">Non-Fiction / Business &amp; Growth</option>
                      <option value="Children's & Young Adult">Children&apos;s &amp; Young Adult</option>
                      <option value="Poetry & Creative Anthology">Poetry &amp; Creative Anthology</option>
                    </select>
                  </div>
                </div>

                {/* Publication Status */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Publication Status *
                  </label>
                  <select
                    value={formData.publicationStatus}
                    onChange={(e) => setFormData({ ...formData, publicationStatus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Manuscript in Progress">Manuscript in Progress (Writing / Editing)</option>
                    <option value="Ready for Publication">Ready for Publication (Cover &amp; Manuscript Completed)</option>
                    <option value="Pre-Order Scheduled">Pre-Order Scheduled (Upcoming Release Date Set)</option>
                    <option value="Published Debut">Published Debut (Recently Released Title)</option>
                    <option value="Backlist Title">Backlist Title (Revitalizing an Existing Published Work)</option>
                  </select>
                </div>

                {/* Main Service(s) of Interest — Multi-Select */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Primary Service(s) of Interest (Select All That Apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES.map((srv) => {
                      const isSelected = formData.services.includes(srv.title);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => handleServiceToggle(srv.title)}
                          className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#07172D] border-[#D4AF37] text-white font-medium'
                              : 'bg-[#07172D]/40 border-white/10 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          <span className="line-clamp-1">{srv.title}</span>
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 ${
                              isSelected
                                ? 'bg-[#D4AF37] text-[#05080F]'
                                : 'border border-white/20'
                            }`}
                          >
                            {isSelected && <CheckCircle className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.services}</span>
                    </p>
                  )}
                </div>

                {/* Target Audience & Project Objectives */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Audience / Readers
                    </label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                      placeholder="e.g., Adults 25-45 who love dark fantasy and mythology"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Preferred Timeline *
                    </label>
                    <select
                      value={formData.preferredTimeline}
                      onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Urgent (Next 2-4 Weeks)">Urgent (Next 2-4 Weeks)</option>
                      <option value="Within 4-8 Weeks">Standard (Within 4-8 Weeks)</option>
                      <option value="In 2 to 4 Months">Strategic Window (In 2 to 4 Months)</option>
                      <option value="Exploratory / Long-Term">Exploratory / Later this Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Objectives &amp; Vision *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectObjectives}
                    onChange={(e) => setFormData({ ...formData, projectObjectives: e.target.value })}
                    placeholder="Tell us what you hope to achieve (e.g., build my debut author identity, prepare a book trailer for an upcoming Kickstarter/pre-order, or establish comps research)..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.projectObjectives ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.projectObjectives && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.projectObjectives}</span>
                    </p>
                  )}
                </div>

                {/* Additional Details & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Starter Tier ($750 - $1,500 USD)">Starter Tier ($750 - $1,500 USD)</option>
                      <option value="Standard Investment ($1,500 - $3,000 USD)">Standard Investment ($1,500 - $3,000 USD)</option>
                      <option value="Comprehensive Launch ($3,000 - $6,000+ USD)">Comprehensive Launch ($3,000 - $6,000+ USD)</option>
                      <option value="Flexible / Pending Strategic Proposal">Flexible / Pending Strategic Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Special Requests / Links
                    </label>
                    <input
                      type="text"
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      placeholder="Cover artist details, specific release date, etc."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07172D] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-2">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#D4AF37] w-4 h-4 rounded"
                    />
                    <label htmlFor="privacy-consent" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                      I agree to the processing of my project details by I.G.O. DYNAMIX in accordance with the Privacy Policy. We do not sell your contact details or spam your inbox.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 shadow-lg shadow-[#D4AF37]/25 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Verifying & Registering...' : 'Submit Book Project Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Secondary Contact Channels & Guarantee Disclosure */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {/* Direct Verification Desk */}
            <div className="p-6 rounded-2xl bg-[#05080F] border border-[#D4AF37]/30 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                Direct Contact Channels
              </span>

              <h3 className="text-xl font-serif font-bold text-white">
                Speak With Our Desk
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer direct correspondence before submitting your project outline? Contact our author desk directly:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#07172D] border border-white/10 hover:border-[#D4AF37] text-xs text-slate-200 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="truncate">{BRAND.email}</span>
                </a>

                <a
                  href={BRAND.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#07172D] border border-white/10 hover:border-[#D4AF37] text-xs text-slate-200 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="truncate">Instagram: @igodynamix</span>
                </a>

                <a
                  href={BRAND.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#07172D] border border-white/10 hover:border-[#D4AF37] text-xs text-slate-200 transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="truncate">Facebook: I.G.O. DYNAMIX</span>
                </a>

                <div className="p-3 rounded-lg bg-[#07172D] border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {BRAND.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Consultation Protocol Card */}
            <div className="p-6 rounded-2xl bg-[#05080F] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
                <MessageSquare className="w-4 h-4" />
                <span>What Happens Next?</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">1.</span>
                  <span>We review your manuscript stage and genre positioning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">2.</span>
                  <span>We send a structured initial assessment within 24 to 48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">3.</span>
                  <span>We arrange a 30-minute discovery call to align on scope and roadmap.</span>
                </li>
              </ul>
            </div>

            {/* Strict Non-Guarantee Badge */}
            <div className="p-4 rounded-xl bg-[#05080F] border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                I.G.O. DYNAMIX does not participate in deceptive publishing practices or promise automated bestseller placement. All work is professional creative design, research, and organic reader engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
