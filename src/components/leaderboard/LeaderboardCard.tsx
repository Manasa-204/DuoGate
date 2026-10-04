import React from 'react';
import { LeaderboardItem } from '../../types';

interface LeaderboardCardProps {
  item: LeaderboardItem;
  isUserCollege: boolean;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ item, isUserCollege }) => {
  const pct = Math.min(100, Math.round((item.count / item.target) * 100));

  return (
    <div 
      className={`bg-slate-950/80 border rounded-xl p-3 space-y-2 transition-all ${
        isUserCollege
          ? 'border-cyan-500/60 bg-cyan-950/10 shadow-sm shadow-cyan-900/20'
          : 'border-slate-800/80 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black ${
            item.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-400/50' : 
            item.rank === 2 ? 'bg-slate-300 text-slate-950' : 
            item.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            {item.rank}
          </span>
          <div>
            <span className="font-bold text-slate-200 block truncate max-w-[190px]">
              {item.college}
            </span>
            <span className="text-[10px] text-slate-400">{item.batch} • {item.state}</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-bold text-cyan-400">{item.count}</span>
          <span className="text-[10px] text-slate-500"> / {item.target} teams</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            pct > 80 ? 'bg-gradient-to-r from-emerald-400 to-cyan-400' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
