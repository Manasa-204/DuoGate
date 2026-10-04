import React from 'react';
import { RegistrationStreamItem } from '../../types';

interface CampusLiveActivityProps {
  stream: RegistrationStreamItem[];
}

export const CampusLiveActivity: React.FC<CampusLiveActivityProps> = ({ stream }) => {
  return (
    <div className="pt-2 border-t border-slate-800">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
        Recent Campus Activity
      </span>
      <div className="space-y-1.5 max-h-24 overflow-hidden text-[11px]">
        {stream.slice(0, 3).map((sig, i) => (
          <div key={i} className="flex items-center justify-between text-slate-400">
            <span className="truncate max-w-[200px]">
              <strong className="text-slate-200 font-semibold">{sig.names}</strong> ({sig.college})
            </span>
            <span className="text-[10px] font-mono text-cyan-400 shrink-0">{sig.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
