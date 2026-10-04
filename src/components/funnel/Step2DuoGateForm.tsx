import React from 'react';
import { Users, Sparkles, Unlock, Share2 } from 'lucide-react';
import { PartnerUser } from '../../types';
import { CAPSTONE_DOMAINS } from '../../data/capstoneDomains';

interface Step2DuoGateFormProps {
  partnerUser: PartnerUser;
  onChangePartner: (updated: PartnerUser) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSkip: () => void;
  whatsAppEncodedMessage: string;
}

export const Step2DuoGateForm: React.FC<Step2DuoGateFormProps> = ({
  partnerUser,
  onChangePartner,
  onSubmit,
  onSkip,
  whatsAppEncodedMessage,
}) => {
  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Value Framing Banner */}
      <div className="bg-gradient-to-r from-indigo-950/90 via-purple-950/80 to-slate-950 border border-indigo-500/40 rounded-2xl p-4 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300 bg-indigo-900/60 px-2 py-0.5 rounded border border-indigo-700">
                Capstone Duo Unlock
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Double Reward Active
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mt-1">Final-Year Projects are done in Pairs / Teams</h3>
            <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
              Register with your project partner to automatically unlock the <strong>System Architecture Mermaid Blueprint</strong>, <strong>8th-Sem Viva Defense Cheatsheet</strong>, and <strong>₹1,500 Cloud GPU credits</strong> for both seats.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Capstone Partner's Full Name
          </label>
          <input
            type="text"
            required
            value={partnerUser.name}
            onChange={(e) => onChangePartner({ ...partnerUser, name: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="e.g., Rohit Sharma"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Partner's WhatsApp (+91)
          </label>
          <input
            type="tel"
            required
            value={partnerUser.phone}
            onChange={(e) => onChangePartner({ ...partnerUser, phone: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="9123456780"
          />
          <p className="text-[11px] text-slate-500 mt-1">
            Your partner will receive their calendar invite and repo permissions automatically.
          </p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Preferred Capstone Project Domain
          </label>
          <select
            value={partnerUser.domain}
            onChange={(e) => onChangePartner({ ...partnerUser, domain: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
          >
            {CAPSTONE_DOMAINS.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 text-sm transition-all"
          >
            <Unlock className="w-4 h-4 stroke-[2.5]" />
            <span>Pair Duo & Unlock Capstone Pack</span>
          </button>

          <button
            type="button"
            onClick={onSkip}
            className="text-xs text-slate-400 hover:text-slate-200 px-4 py-3 border border-slate-800 rounded-xl hover:bg-slate-800/60 transition-colors text-center font-medium"
          >
            Skip (Proceed Solo)
          </button>
        </div>
      </form>

      {/* Direct Batch Blast Prompt */}
      <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-slate-400">Want to register your entire 4-person lab team?</span>
        <a
          href={`https://wa.me/?text=${whatsAppEncodedMessage}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 px-3.5 py-1.5 rounded-lg transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Forward to Batch WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
