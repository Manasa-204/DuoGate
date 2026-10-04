import React, { useState, useCallback } from 'react';
import { 
  FunnelStep, 
  PrimaryUser, 
  PartnerUser, 
  LeaderboardItem, 
  RegistrationStreamItem 
} from './types';
import { INITIAL_LEADERBOARD } from './data/leaderboardData';
import { MOCK_STREAM_REGISTRATIONS } from './data/mockStreamData';
import { COLLEGES_DATA } from './data/colleges';
import { generateReferralCode } from './utils/referralGenerator';
import { buildShareableUrl, buildEncodedWhatsAppMessage } from './utils/shareFormatters';
import { useCountdown } from './hooks/useCountdown';
import { useToastStream } from './hooks/useToastStream';
import { useClipboard } from './hooks/useClipboard';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastNotification } from './components/common/ToastNotification';
import { HeroBanner } from './components/hero/HeroBanner';
import { FunnelContainer } from './components/funnel/FunnelContainer';
import { LeaderboardList } from './components/leaderboard/LeaderboardList';
import { AssetVault } from './components/vault/AssetVault';
import { EvaluatorMathModal } from './components/modals/EvaluatorMathModal';

export default function App() {
  // Navigation & Funnel States
  const [step, setStep] = useState<FunnelStep>(1);
  const [showEvaluatorModal, setShowEvaluatorModal] = useState<boolean>(false);
  const [isDuoClaimed, setIsDuoClaimed] = useState<boolean>(false);

  // Registration Form States
  const [primaryUser, setPrimaryUser] = useState<PrimaryUser>({
    name: 'Harsh Vardhan',
    email: 'harsh.v2026@gmail.com',
    phone: '9876543210',
    college: 'AKTU Lucknow',
    branch: 'Computer Science & Engineering (CSE)'
  });

  const [partnerUser, setPartnerUser] = useState<PartnerUser>({
    name: '',
    phone: '',
    domain: 'Smart Document Q&A App (RAG with Vector Search)'
  });

  // Dynamic Urgency & Growth Counters
  const [seatsClaimed, setSeatsClaimed] = useState<number>(384);
  const totalTarget = 500;
  const [userReferralCode, setUserReferralCode] = useState<string>('NXT-AKTU-7194');

  // Custom Hooks
  const timeLeft = useCountdown({ days: 6, hours: 19, minutes: 42, seconds: 18 });
  const { copy, isCopied } = useClipboard();

  const handleIncrementSeats = useCallback(() => {
    setSeatsClaimed(prev => (prev < 498 ? prev + 1 : prev));
  }, []);

  const { toast, dismissToast } = useToastStream(handleIncrementSeats);

  // Leaderboard & Stream State
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>(INITIAL_LEADERBOARD);
  const [liveStream, setLiveStream] = useState<RegistrationStreamItem[]>(MOCK_STREAM_REGISTRATIONS);

  // Form Submissions
  const handlePrimarySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryUser.name || !primaryUser.email || !primaryUser.phone) return;

    // Generate state-specific referral code
    const newCode = generateReferralCode(primaryUser.college);
    setUserReferralCode(newCode);

    setStep(2);
    setSeatsClaimed(prev => Math.min(totalTarget, prev + 1));
  };

  const handleDuoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerUser.name || !partnerUser.phone) return;

    setIsDuoClaimed(true);
    setStep(3);
    setSeatsClaimed(prev => Math.min(totalTarget, prev + 1));

    // Update real-time leaderboard for selected college
    setLeaderboard(prev => {
      const matchIndex = prev.findIndex(item => 
        item.college.toLowerCase().includes(primaryUser.college.split(' ')[0].toLowerCase())
      );
      if (matchIndex >= 0) {
        const updated = [...prev];
        updated[matchIndex] = {
          ...updated[matchIndex],
          count: updated[matchIndex].count + 2
        };
        return updated.sort((a, b) => b.count - a.count).map((item, idx) => ({ ...item, rank: idx + 1 }));
      }

      const collegeMatch = COLLEGES_DATA.find(c => 
        c.short.toLowerCase() === primaryUser.college.toLowerCase() ||
        c.name.toLowerCase().includes(primaryUser.college.toLowerCase())
      );
      const state = collegeMatch ? collegeMatch.state : 'Other';

      const updated = [
        ...prev,
        { 
          rank: prev.length + 1, 
          college: primaryUser.college, 
          state: state, 
          count: 2, 
          target: 50, 
          batch: primaryUser.branch.split(' ')[0] 
        }
      ];
      return updated.sort((a, b) => b.count - a.count).map((item, idx) => ({ ...item, rank: idx + 1 }));
    });

    // Add new pairing to live stream
    setLiveStream(prev => [
      {
        names: `${primaryUser.name.split(' ')[0]} & ${partnerUser.name.split(' ')[0]}`,
        college: primaryUser.college,
        time: 'Just now',
        state: 'Verified',
        duo: true
      },
      ...prev.slice(0, 5)
    ]);
  };

  const handleSoloSkip = () => {
    setIsDuoClaimed(false);
    setStep(3);
    setLiveStream(prev => [
      {
        names: primaryUser.name,
        college: primaryUser.college,
        time: 'Just now',
        state: 'Solo Entry',
        duo: false
      },
      ...prev.slice(0, 5)
    ]);
  };

  const handlePairPartner = () => {
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setIsDuoClaimed(false);
    setPartnerUser({
      name: '',
      phone: '',
      domain: 'Smart Document Q&A App (RAG with Vector Search)'
    });
  };

  const shareableUrl = buildShareableUrl(userReferralCode);
  const whatsAppMessage = buildEncodedWhatsAppMessage(userReferralCode);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Floating Real-Time Social Proof Toast */}
      <ToastNotification toast={toast} onClose={dismissToast} />

      {/* Navigation Header */}
      <Header
        timeLeft={timeLeft}
        onOpenEvaluatorModal={() => setShowEvaluatorModal(true)}
      />

      {/* Hero Conversion Banner */}
      <HeroBanner seatsClaimed={seatsClaimed} totalTarget={totalTarget} />

      {/* Interactive Main Section: Funnel (Left) + Leaderboard (Right) */}
      <main className="max-w-7xl mx-auto px-4 py-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <FunnelContainer
          step={step}
          primaryUser={primaryUser}
          partnerUser={partnerUser}
          isDuoClaimed={isDuoClaimed}
          userReferralCode={userReferralCode}
          shareableUrl={shareableUrl}
          copiedLink={isCopied('referral-link')}
          whatsAppEncodedMessage={whatsAppMessage}
          onChangePrimaryUser={setPrimaryUser}
          onChangePartnerUser={setPartnerUser}
          onSubmitPrimary={handlePrimarySubmit}
          onSubmitDuo={handleDuoSubmit}
          onSkipDuo={handleSoloSkip}
          onCopyLink={() => copy(shareableUrl, 'referral-link')}
          onPairPartner={handlePairPartner}
          onReset={handleReset}
        />

        <LeaderboardList
          leaderboard={leaderboard}
          userCollege={primaryUser.college}
          liveStream={liveStream}
        />
      </main>

      {/* Capstone Deliverables & Asset Vault */}
      <AssetVault />

      {/* Evaluator Growth Strategy Modal */}
      <EvaluatorMathModal
        isOpen={showEvaluatorModal}
        onClose={() => setShowEvaluatorModal(false)}
      />

      {/* Footer */}
      <Footer onOpenEvaluatorModal={() => setShowEvaluatorModal(true)} />
    </div>
  );
}
