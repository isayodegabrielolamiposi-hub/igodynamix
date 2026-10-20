import React, { useState } from 'react';
import { Quote, Shield, Send, Check } from 'lucide-react';
import { TESTIMONIAL_FRAMEWORK } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    bookTitle: '',
    serviceReceived: 'Author Brand Starter & Promotional Mockups',
    testimonial: '',
    permissionToPublish: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmissionForm(false);
      setFormState({
        name: '',
        bookTitle: '',
        serviceReceived: 'Author Brand Starter & Promotional Mockups',
        testimonial: '',
        permissionToPublish: true,
      });
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#07172D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span>Client Voices &amp; Social Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Author Experiences &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Collaborative Feedback</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We uphold strict ethical standards. Testimonials below represent structured client feedback format with verified permissions to publish.
            </p>
          </div>

          <button
            onClick={() => setShowSubmissionForm(!showSubmissionForm)}
            className="px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase text-white hover:text-[#05080F] border border-[#D4AF37]/40 hover:bg-gold-gradient transition-all shrink-0 self-start md:self-auto"
          >
            {showSubmissionForm ? 'Close Submission Guide' : 'Submit Author Feedback'}
          </button>
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#05080F]/60 border border-[#D4AF37]/20 flex items-start gap-3 text-left">
          <Shield className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            {TESTIMONIAL_FRAMEWORK.notice}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_FRAMEWORK.sampleReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#05080F] border border-white/10 hover:border-[#D4AF37]/40 transition-colors text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />

                <p className="text-slate-200 text-sm leading-relaxed italic font-serif">
                  &ldquo;{rev.testimonial}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">
                    {rev.clientName}
                  </h4>
                  <span className="text-[10px] font-mono text-[#F3D77A]">
                    {rev.verifiedClientStatus}
                  </span>
                </div>
                <p className="text-xs text-[#D4AF37]">
                  {rev.bookTitle}
                </p>
                <p className="text-[11px] text-slate-400">
                  Service: {rev.serviceReceived}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Submission Drawer */}
        {showSubmissionForm && (
          <div className="mt-12 p-8 rounded-2xl bg-[#05080F] border border-[#D4AF37]/40 text-left animate-in slide-in-from-top duration-300">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Author Client Feedback Submission
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Completed an author branding, trailer, or campaign project with I.G.O. DYNAMIX? Share your experience with prospective authors.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your feedback has been received and logged for editorial verification.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                      Client Name / Pen Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g., Katherine Miller"
                      className="w-full px-3.5 py-2 rounded bg-[#07172D] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                      Book Title &amp; Genre *
                    </label>
                    <input
                      required
                      type="text"
                      value={formState.bookTitle}
                      onChange={(e) => setFormState({ ...formState, bookTitle: e.target.value })}
                      placeholder="e.g., The Midnight Citadel (Fantasy)"
                      className="w-full px-3.5 py-2 rounded bg-[#07172D] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Service Received *
                  </label>
                  <select
                    value={formState.serviceReceived}
                    onChange={(e) => setFormState({ ...formState, serviceReceived: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-[#07172D] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Author Brand Starter & Promotional Mockups">Author Brand Starter &amp; Promotional Mockups</option>
                    <option value="Book Visibility Campaign & Social Strategy">Book Visibility Campaign &amp; Social Strategy</option>
                    <option value="Complete Book Launch Framework">Complete Book Launch Framework</option>
                    <option value="Book Trailer Production">Book Trailer Production</option>
                    <option value="Book Market Research & Comps Analysis">Book Market Research &amp; Comps Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Your Testimonial / Experience *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.testimonial}
                    onChange={(e) => setFormState({ ...formState, testimonial: e.target.value })}
                    placeholder="Describe how the creative strategy or promotional assets impacted your book's reach..."
                    className="w-full px-3.5 py-2 rounded bg-[#07172D] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    required
                    type="checkbox"
                    id="permission"
                    checked={formState.permissionToPublish}
                    onChange={(e) => setFormState({ ...formState, permissionToPublish: e.target.checked })}
                    className="mt-0.5 accent-[#D4AF37]"
                  />
                  <label htmlFor="permission" className="text-xs text-slate-300">
                    I grant I.G.O. DYNAMIX permission to display this feedback and project attribution on the website and promotional media.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Verified Feedback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
