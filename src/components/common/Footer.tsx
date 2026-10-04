import React from 'react';

interface FooterProps {
  onOpenEvaluatorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEvaluatorModal }) => {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/60 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-400">NxtWave AI Workshop Growth Simulation</span>
          <span>•</span>
          <span>Batch 2026 / 2027 Final-Year Accelerator</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button 
            onClick={onOpenEvaluatorModal} 
            className="text-amber-400 hover:underline"
          >
            Evaluator Growth Math
          </button>
          <span>•</span>
          <span className="text-slate-400">Designed for 500+ Verified Registrations in 7 Days</span>
        </div>
      </div>
    </footer>
  );
};
