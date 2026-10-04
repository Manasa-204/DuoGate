import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { VIVA_CARDS } from '../../data/vivaCards';

export const VivaSimulatorTab: React.FC = () => {
  const [expandedViva, setExpandedViva] = useState<number | null>(1);

  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-xs text-slate-400">
        External viva examiners and placement panels ask practical architecture tradeoffs. Click any question below to study the verified model defense:
      </p>

      <div className="grid grid-cols-1 gap-3">
        {VIVA_CARDS.map((card) => {
          const isExpanded = expandedViva === card.id;
          return (
            <div 
              key={card.id}
              onClick={() => setExpandedViva(isExpanded ? null : card.id)}
              className={`cursor-pointer rounded-2xl border transition-all p-4 ${
                isExpanded 
                  ? 'bg-slate-950 border-cyan-500/50 shadow-lg shadow-cyan-950/20' 
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 shrink-0 mt-0.5">
                    {card.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{card.q}</h4>
                </div>
                <ChevronRight 
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    isExpanded ? 'rotate-90 text-cyan-400' : ''
                  }`} 
                />
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 pl-2 text-xs text-slate-300 leading-relaxed space-y-1">
                  <span className="text-[11px] font-bold text-cyan-400 block uppercase tracking-wider">
                    Model Viva Defense:
                  </span>
                  <p>{card.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
