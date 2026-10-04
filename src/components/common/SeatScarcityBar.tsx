import React from 'react';
import { Flame } from 'lucide-react';

interface SeatScarcityBarProps {
  claimed: number;
  total: number;
}

export const SeatScarcityBar: React.FC<SeatScarcityBarProps> = ({ claimed, total }) => {
  const percentage = Math.min(100, Math.round((claimed / total) * 100));
  const remaining = Math.max(0, total - claimed);

  return (
    <div className="max-w-md mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-rose-500 fill-rose-500" /> Batch Enrollment Progress:
        </span>
        <span className="font-mono font-bold text-white">
          <strong className="text-cyan-400">{claimed}</strong> / {total} Seats Claimed
        </span>
      </div>

      <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-800" role="progressbar" aria-valuenow={claimed} aria-valuemin={0} aria-valuemax={total}>
        <div 
          className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 h-full rounded-full transition-all duration-700 shadow-sm shadow-cyan-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>₹0 Free Entry Registration</span>
        <span className="text-rose-400 font-semibold">{remaining} Final-Year Seats Left</span>
      </div>
    </div>
  );
};
