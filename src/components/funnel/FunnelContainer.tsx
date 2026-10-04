import React from 'react';
import { Check } from 'lucide-react';
import { FunnelStep, PrimaryUser, PartnerUser } from '../../types';
import { Step1PrimaryForm } from './Step1PrimaryForm';
import { Step2DuoGateForm } from './Step2DuoGateForm';
import { Step3PostRegDashboard } from './Step3PostRegDashboard';

interface FunnelContainerProps {
  step: FunnelStep;
  primaryUser: PrimaryUser;
  partnerUser: PartnerUser;
  isDuoClaimed: boolean;
  userReferralCode: string;
  shareableUrl: string;
  copiedLink: boolean;
  whatsAppEncodedMessage: string;
  onChangePrimaryUser: (user: PrimaryUser) => void;
  onChangePartnerUser: (partner: PartnerUser) => void;
  onSubmitPrimary: (e: React.FormEvent) => void;
  onSubmitDuo: (e: React.FormEvent) => void;
  onSkipDuo: () => void;
  onCopyLink: () => void;
  onPairPartner?: () => void;
  onReset?: () => void;
}

export const FunnelContainer: React.FC<FunnelContainerProps> = ({
  step,
  primaryUser,
  partnerUser,
  isDuoClaimed,
  userReferralCode,
  shareableUrl,
  copiedLink,
  whatsAppEncodedMessage,
  onChangePrimaryUser,
  onChangePartnerUser,
  onSubmitPrimary,
  onSubmitDuo,
  onSkipDuo,
  onCopyLink,
  onPairPartner,
  onReset,
}) => {
  return (
    <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
      {/* Subtle Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-t-3xl" />

      {/* Stepper Indicator */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
        {/* Step 1 Pill */}
        <div className="flex items-center gap-3">
          <div 
            className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs transition-colors ${
              step === 1 
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30' 
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            }`}
          >
            {step > 1 ? <Check className="w-4 h-4 stroke-[3]" /> : '01'}
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Primary Engineer</span>
            <span className="text-[11px] text-slate-400">College & Branch Auth</span>
          </div>
        </div>

        <div className={`h-0.5 flex-1 mx-4 rounded-full transition-colors ${step >= 2 ? 'bg-cyan-500' : 'bg-slate-800'}`} />

        {/* Step 2 Pill */}
        <div className="flex items-center gap-3">
          <div 
            className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs transition-colors ${
              step === 2 
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 animate-pulse' 
                : step > 2 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-slate-800 text-slate-500'
            }`}
          >
            {step > 2 ? <Check className="w-4 h-4 stroke-[3]" /> : '02'}
          </div>
          <div>
            <span className={`text-xs font-bold block ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>Pair Project Partner</span>
            <span className="text-[11px] text-slate-400">Unlock Free Perks</span>
          </div>
        </div>
      </div>

      {/* Render Active Step */}
      {step === 1 && (
        <Step1PrimaryForm
          primaryUser={primaryUser}
          onChangeUser={onChangePrimaryUser}
          onSubmit={onSubmitPrimary}
        />
      )}

      {step === 2 && (
        <Step2DuoGateForm
          partnerUser={partnerUser}
          onChangePartner={onChangePartnerUser}
          onSubmit={onSubmitDuo}
          onSkip={onSkipDuo}
          whatsAppEncodedMessage={whatsAppEncodedMessage}
        />
      )}

      {step === 3 && (
        <Step3PostRegDashboard
          primaryUser={primaryUser}
          partnerUser={partnerUser}
          isDuoClaimed={isDuoClaimed}
          userReferralCode={userReferralCode}
          shareableUrl={shareableUrl}
          copiedLink={copiedLink}
          onCopyLink={onCopyLink}
          whatsAppEncodedMessage={whatsAppEncodedMessage}
          onPairPartner={onPairPartner}
          onReset={onReset}
        />
      )}
    </div>
  );
};
