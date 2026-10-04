import React, { useState, useMemo } from 'react';
import { Award } from 'lucide-react';
import { LeaderboardItem, RegistrationStreamItem, StateFilter } from '../../types';
import { TrophyIcon } from './TrophyIcon';
import { LeaderboardCard } from './LeaderboardCard';
import { CampusLiveActivity } from './CampusLiveActivity';

interface LeaderboardListProps {
  leaderboard: LeaderboardItem[];
  userCollege: string;
  liveStream: RegistrationStreamItem[];
}

const STATE_FILTERS: StateFilter[] = [
  'All', 
  'Uttar Pradesh', 
  'Karnataka', 
  'Telangana & AP', 
  'Tamil Nadu', 
  'Maharashtra'
];

export const LeaderboardList: React.FC<LeaderboardListProps> = ({
  leaderboard,
  userCollege,
  liveStream,
}) => {
  const [activeFilter, setActiveFilter] = useState<StateFilter>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return leaderboard;
    return leaderboard.filter(item => item.state === activeFilter);
  }, [leaderboard, activeFilter]);

  return (
    <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
            <TrophyIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Inter-College Leaderboard</h3>
            <p className="text-[10px] text-slate-400">Final-Year Batch Competitions</p>
          </div>
        </div>

        <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Sync
        </span>
      </div>

      {/* Target Milestone Banner */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs space-y-1">
        <div className="flex items-center justify-between font-bold text-white">
          <span className="text-amber-300 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> Batch Milestone: 50 Duo Teams
          </span>
          <span className="text-[10px] text-cyan-400 font-mono">Hosted Vector API</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-snug">
          When a college batch reaches 50 verified duo pairs, <strong>all registered students from that college get 3 months of free hosted Vector DB credits</strong> for their capstone submissions.
        </p>
      </div>

      {/* State Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
        {STATE_FILTERS.map((st) => (
          <button
            key={st}
            onClick={() => setActiveFilter(st)}
            className={`px-2.5 py-1 rounded-lg shrink-0 font-medium transition-colors ${
              activeFilter === st 
                ? 'bg-cyan-500 text-slate-950 font-bold' 
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {st === 'Telangana & AP' ? 'TS / AP' : st}
          </button>
        ))}
      </div>

      {/* College Ranking Cards */}
      <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
        {filteredItems.map((item, idx) => (
          <LeaderboardCard
            key={idx}
            item={item}
            isUserCollege={userCollege.toLowerCase().includes(item.college.split(' ')[0].toLowerCase())}
          />
        ))}
      </div>

      {/* Live Registration Stream Ticker */}
      <CampusLiveActivity stream={liveStream} />
    </div>
  );
};
