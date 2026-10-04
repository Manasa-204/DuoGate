import React from 'react';
import { TIMELINE_STEPS } from '../../data/timelineSteps';

export const CurriculumTimelineTab: React.FC = () => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-xs text-slate-400">
        A structured, fast-paced build sprint designed so no student gets left behind regardless of prior AI exposure:
      </p>

      <div className="space-y-3">
        {TIMELINE_STEPS.map((st, i) => (
          <div 
            key={i} 
            className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 px-2.5 py-1 rounded-lg shrink-0">
                {st.min}
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">{st.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{st.desc}</p>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
              Live Code
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
