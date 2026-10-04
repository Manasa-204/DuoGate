import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Copy, Check, Share2, Shield, ExternalLink, Eye, ChevronDown } from 'lucide-react';
import { PrimaryUser, PartnerUser } from '../../types';
import { SocialSharePreview } from './SocialSharePreview';
import { ShareDomainStyle, buildShareableUrl, buildEncodedWhatsAppMessage } from '../../utils/shareFormatters';

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
  const [domainStyle, setDomainStyle] = useState<ShareDomainStyle>('branded');
  const [localCopied, setLocalCopied] = useState<boolean>(false);
  const [showPreviewTester, setShowPreviewTester] = useState<boolean>(true);

  const activeUrl = buildShareableUrl(userReferralCode, domainStyle, primaryUser.college);
  const activeWhatsAppMessage = buildEncodedWhatsAppMessage(userReferralCode, domainStyle, primaryUser.college);

  const handleCopyCurrent = () => {
    navigator.clipboard.writeText(activeUrl);
    setLocalCopied(true);
    setTimeout(() => setLocalCopied(false), 2000);
    onCopyLink();
  };

  const collegeSlug = primaryUser.college.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 8);

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
              {isDuoClaimed ? "🎉 Team Seat Confirmed & Bonus Pack Unlocked!" : "Workshop Seat Confirmed! 🎉"}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isDuoClaimed
              ? `Paired: ${primaryUser.name} & ${partnerUser.name} (${primaryUser.college})`
              : `${primaryUser.name} (${primaryUser.college}) — Your workshop seat is secured.`}
          </p>
          <p className="text-[11px] text-emerald-400 font-mono">
            Workshop Access &amp; Calendar link sent to {primaryUser.email} &amp; WhatsApp (+91 {primaryUser.phone})
          </p>
        </div>
      </div>

      {/* Solo Upgrade Callout */}
      {!isDuoClaimed && onPairPartner && (
        <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/50 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Invite a Project Partner (Free Bonus Pack)
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
            Add Partner Now
          </button>
        </div>
      )}

      {/* High-Trust Branded Share Box */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Your Official College Invite Link
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded-full">
              <Shield className="w-3 h-3 text-emerald-400" /> High-Trust Domain
            </span>
          </div>
          <span className="text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 px-2.5 py-0.5 rounded font-bold">
            {userReferralCode}
          </span>
        </div>

        {/* Clean Short Domain Toggle */}
        <div className="space-y-1.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[11px]">Domain trust format:</span>
            <span className="text-[10px] text-cyan-400 font-mono">Bypasses WhatsApp spam blocks</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setDomainStyle('branded')}
              className={`px-2 py-1.5 rounded-lg text-[11px] font-mono transition-colors text-center truncate ${
                domainStyle === 'branded' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              nxtwave.ai/rag60
            </button>
            <button
              type="button"
              onClick={() => setDomainStyle('short')}
              className={`px-2 py-1.5 rounded-lg text-[11px] font-mono transition-colors text-center truncate ${
                domainStyle === 'short' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              nxt.to/rag60 (Short)
            </button>
            <button
              type="button"
              onClick={() => setDomainStyle('college')}
              className={`px-2 py-1.5 rounded-lg text-[11px] font-mono transition-colors text-center truncate ${
                domainStyle === 'college' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow' 
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              nxtwave.ai/{collegeSlug}
            </button>
          </div>
        </div>

        {/* Share Link Copy Field */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={activeUrl}
            className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs font-mono text-cyan-300 select-all focus:outline-none"
          />
          <button
            onClick={handleCopyCurrent}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            {(localCopied || copiedLink) ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{(localCopied || copiedLink) ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        {/* 1-Click WhatsApp Forward Button */}
        <a
          href={`https://wa.me/?text=${activeWhatsAppMessage}`}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg shadow-emerald-950/40 transition-all group"
        >
          <Share2 className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
          <span>Share Formatted Invite to College WhatsApp Group</span>
        </a>

        <div className="flex items-center justify-between pt-1">
          <p className="text-[11px] text-slate-400">
            Every classmate who joins bumps <strong className="text-cyan-400">{primaryUser.college}</strong> up the batch leaderboard.
          </p>
          <button
            type="button"
            onClick={() => setShowPreviewTester(!showPreviewTester)}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0 font-medium"
          >
            <Eye className="w-3 h-3" />
            <span>{showPreviewTester ? 'Hide Link Preview' : 'Test Link Preview'}</span>
          </button>
        </div>
      </div>

      {/* Social Link Preview Tester (WhatsApp / Telegram) */}
      {showPreviewTester && (
        <SocialSharePreview
          shareableUrl={activeUrl}
          collegeName={primaryUser.college}
        />
      )}

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
