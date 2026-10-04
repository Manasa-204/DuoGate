import React from 'react';
import { BarChart3 } from 'lucide-react';
import { TimeRemaining } from '../../types';
import { CountdownTimer } from './CountdownTimer';

interface HeaderProps {
  timeLeft: TimeRemaining;
  onOpenEvaluatorModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ timeLeft, onOpenEvaluatorModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#07090E]/90 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Logo & Category */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-2 rounded-xl text-slate-950 font-black text-sm tracking-widest shadow-md shadow-cyan-500/20">
            NXT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-tight text-white">NxtWave AI Labs</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                Sprint 2026
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">Free 60-Minute AI Workshop • Batch 2026/2027</p>
          </div>
        </div>

        {/* Center Urgency Countdown */}
        <CountdownTimer timeLeft={timeLeft} />

        {/* Right Action: Evaluator Mode Modal Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEvaluatorModal}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span>Growth Architecture & Math (For Evaluators)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
