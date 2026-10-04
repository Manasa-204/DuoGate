import React from 'react';
import { Clock } from 'lucide-react';
import { TimeRemaining } from '../../types';

interface CountdownTimerProps {
  timeLeft: TimeRemaining;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  return (
    <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl shadow-inner text-xs">
      <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
      <div className="flex items-center gap-1.5 font-mono font-bold text-white text-xs">
        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">
          {String(timeLeft.days).padStart(2, '0')}d
        </span>:
        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">
          {String(timeLeft.hours).padStart(2, '0')}h
        </span>:
        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">
          {String(timeLeft.minutes).padStart(2, '0')}m
        </span>:
        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
          {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>
      <span className="text-[11px] text-slate-400 hidden md:inline">to live launch</span>
    </div>
  );
};
