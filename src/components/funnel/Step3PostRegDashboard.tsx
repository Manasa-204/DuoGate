import React from 'react';
import { CheckCircle2, Sparkles, Copy, Check, Share2 } from 'lucide-react';
import { PrimaryUser, PartnerUser } from '../../types';

interface Step3PostRegDashboardProps {
  primaryUser: PrimaryUser;
  partnerUser: PartnerUser;
  isDuoClaimed: boolean;
  userReferralCode: string;
  shareableUrl: string;
  copiedLink: boolean;
  onCopyLink: () => void;
  whatsAppEncodedMessage: string;
  onPairPartner?: () => void;
  onReset?: () => void;
}

export const Step3PostRegDashboard: React.FC<Step3PostRegDashboardProps> = ({
  primaryUser,
  partnerUser,
  isDuoClaimed,
  userReferralCode,
  shareableUrl,
  copiedLink,
  onCopyLink,
  whatsAppEncodedMessage,
  onPairPartner,
  onReset,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Success Confirmation Card */}
      <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-5 flex items-start gap-3.5">
        <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0 mt-0.5">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-bold text-emerald-200">
              {isDuoClaimed ? "🎉 Capstone Duo Registered & Assets Unlocked!" : "Registration Confirmed (Solo Mode)"}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isDuoClaimed
              ? `Paired: ${primaryUser.name} & ${partnerUser.name} (${primaryUser.college})`
              : `${primaryUser.name} (${primaryUser.college}) — Your solo workshop seat is secured.`}
          </p>
          <p className="text-[11px] text-emerald-400 font-mono">
            Workshop Link sent to {primaryUser.email} & WhatsApp (+91 {primaryUser.phone})
          </p>
        </div>
      </div>

      {/* Solo Upgrade Callout */}
      {!isDuoClaimed && onPairPartner && (
        <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/50 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Upgrade to Capstone Duo (Free)
            </span>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Add your lab partner now to unlock ₹1,500 Cloud GPU credits and the complete Viva Defense Cheatsheet.
            </p>
          </div>
          <button
            type="button"
            onClick={onPairPartner}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs shrink-0 transition-all shadow-md shadow-amber-950/50"
          >
            Pair Partner Now
          </button>
        </div>
      )}

      {/* Unique Viral Link Box */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3.5 shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Your Official Campus Duo Referral Link
          </span>
          <span className="text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-bold">
            {userReferralCode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={shareableUrl}
            className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-300 select-all focus:outline-none"
          />
          <button
            onClick={onCopyLink}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        {/* 1-Click WhatsApp Forward Button */}
        <a
          href={`https://wa.me/?text=${whatsAppEncodedMessage}`}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg shadow-emerald-950/40 transition-all group"
        >
          <Share2 className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
          <span>Share Formatted Invite to College WhatsApp Group</span>
        </a>
        <p className="text-[11px] text-center text-slate-500">
          Every partner that joins with your link bumps <strong className="text-cyan-400">{primaryUser.college}</strong> up the batch leaderboard.
        </p>
      </div>

      {/* Interactive Unlocked Status */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">GitHub Starter Repo:</span>
          <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Granted
          </span>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">₹1,500 GPU Credits:</span>
          <span className={isDuoClaimed ? "text-emerald-400 font-mono font-bold" : "text-amber-400 font-mono"}>
            {isDuoClaimed ? "Active" : "Solo (Pending Partner)"}
          </span>
        </div>
      </div>

      {onReset && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-slate-300 underline transition-colors"
          >
            Register another team / edit details
          </button>
        </div>
      )}
    </div>
  );
};
