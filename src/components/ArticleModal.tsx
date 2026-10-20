import React, { useState } from 'react';
import { X, Clock, Calendar, Share2, Check, ArrowRight, BookOpen } from 'lucide-react';
import { BlogArticle } from '../types';

interface ArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onInquire }) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Reader Container */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#07172D] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-10 text-left z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        <article className="space-y-6">
          {/* Header Metadata */}
          <div className="space-y-3 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="text-[#D4AF37] font-semibold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.readTime}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.publishedDate}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {article.title}
            </h2>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-slate-400">
                <span>Published by </span>
                <strong className="text-slate-200 font-semibold">{article.authorName}</strong>
                <span> · {article.authorRole}</span>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 text-xs text-slate-200 hover:text-[#D4AF37] hover:bg-white/15 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Guide'}</span>
              </button>
            </div>
          </div>

          {/* Key Strategic Takeaways Box */}
          <div className="p-5 rounded-xl bg-[#05080F] border border-[#D4AF37]/30 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Core Takeaways for Authors</span>
            </h3>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <span className="text-[#D4AF37] font-bold">―</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Article Body Paragraphs */}
          <div className="space-y-6 pt-2">
            {article.paragraphs.map((p, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {p.heading}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Author Desk Callout */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#05080F] to-[#07172D] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-serif font-bold text-white">
                Need guidance applying this strategy to your book?
              </h4>
              <p className="text-xs text-slate-400">
                Schedule a consultation to map out a tailored publishing and marketing timeline.
              </p>
            </div>
            <button
              onClick={() => {
                onInquire();
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 whitespace-nowrap shrink-0"
            >
              <span>Consult Our Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
