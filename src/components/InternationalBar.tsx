import React, { useState } from 'react';
import { Globe, Clock, DollarSign, ShieldAlert } from 'lucide-react';

export const InternationalBar: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedTimeZone, setSelectedTimeZone] = useState('GMT');

  const currencies = [
    { code: 'USD', symbol: '$', label: 'US Dollar', note: 'Standard International Invoicing' },
    { code: 'GBP', symbol: '£', label: 'British Pound', note: 'UK & Commonwealth Accounts' },
    { code: 'EUR', symbol: '€', label: 'Euro', note: 'European Union Authors' },
    { code: 'CAD', symbol: 'C$', label: 'Canadian Dollar', note: 'Canadian Literary Markets' },
    { code: 'AUD', symbol: 'A$', label: 'Australian Dollar', note: 'Australasia & Pacific' },
    { code: 'NGN', symbol: '₦', label: 'Nigerian Naira', note: 'West Africa Desk (WAT)' },
  ];

  const timezones = [
    { code: 'GMT', label: 'Greenwich Mean Time (London / UTC+0)' },
    { code: 'WAT', label: 'West Africa Time (Lagos / UTC+1)' },
    { code: 'EST', label: 'Eastern Standard Time (New York / UTC-5)' },
    { code: 'PST', label: 'Pacific Standard Time (Los Angeles / UTC-8)' },
    { code: 'CET', label: 'Central European Time (Paris / UTC+1)' },
  ];

  return (
    <div className="bg-[#05080F] border-t border-b border-[#D4AF37]/20 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* International Timezone Hub */}
        <div className="space-y-3 p-5 rounded-xl bg-[#07172D]/60 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
            <Clock className="w-4 h-4" />
            <span>Time-Zone-Aware Consultations</span>
          </div>
          <p className="text-xs text-slate-300">
            We conduct client strategy calls across global time zones. Select your preferred consultation zone:
          </p>
          <select
            value={selectedTimeZone}
            onChange={(e) => setSelectedTimeZone(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#05080F] border border-white/20 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
          >
            {timezones.map((tz) => (
              <option key={tz.code} value={tz.code}>
                {tz.code} — {tz.label}
              </option>
            ))}
          </select>
          <p className="text-[11px] text-slate-400 font-mono">
            Active Scheduling Window: Mon–Fri, 09:00 – 18:00 ({selectedTimeZone})
          </p>
        </div>

        {/* Multi-Currency Invoicing Reference */}
        <div className="space-y-3 p-5 rounded-xl bg-[#07172D]/60 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
            <DollarSign className="w-4 h-4" />
            <span>Multi-Currency Client Support</span>
          </div>
          <p className="text-xs text-slate-300">
            Official proposals and electronic invoices support multi-currency author settlements:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setSelectedCurrency(curr.code)}
                className={`px-2 py-1.5 rounded text-xs font-mono transition-colors text-center ${
                  selectedCurrency === curr.code
                    ? 'bg-[#D4AF37] text-[#05080F] font-bold'
                    : 'bg-[#05080F] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {curr.symbol} {curr.code}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-400">
            {currencies.find((c) => c.code === selectedCurrency)?.note}
          </p>
        </div>

        {/* Strict Ethical Non-Guarantee Clause */}
        <div className="space-y-3 p-5 rounded-xl bg-[#07172D]/60 border border-amber-500/20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400">
            <ShieldAlert className="w-4 h-4" />
            <span>Editorial Transparency Notice</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            I.G.O. DYNAMIX operates as a strategic branding, creative design, and promotional consulting partner. In compliance with international advertising standards, we make no claims or guarantees of specific bestseller rankings, sales volumes, or algorithmic outcomes.
          </p>
          <p className="text-[11px] text-slate-400">
            Our commitment is creative excellence, targeted reader positioning, and disciplined promotion.
          </p>
        </div>
      </div>
    </div>
  );
};
