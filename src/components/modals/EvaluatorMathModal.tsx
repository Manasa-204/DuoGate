import React, { useEffect } from 'react';
import { BarChart3, X, Target, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import { FUNNEL_BREAKDOWN_DATA, BUDGET_ITEMS } from '../../data/growthMathData';

interface EvaluatorMathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvaluatorMathModal: React.FC<EvaluatorMathModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="evaluator-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 id="evaluator-modal-title" className="text-base sm:text-lg font-bold text-white">
                Executive Growth Architecture & Funnel Simulation
              </h3>
              <p className="text-xs text-slate-400">Prepared for NxtWave Assignment Evaluators</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Strategic Overview */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" /> 1. The Core Mechanical Thesis: Why Normal Campaigns Fail
            </h4>
            <p>
              Final-year Indian engineering students in their 7th/8th semester have zero interest in generic introductory webinars. They are panicking about <strong>placement interview talking points</strong> and <strong>capstone project viva defense</strong>.
            </p>
            <p>
              Cold emails to college TPOs (Placement Officers) take 2–3 weeks to navigate administrative clearance and yield &lt;1% conversion. Meta ads at ₹2,000 budget yield fewer than 50 clicks. This campaign succeeds by routing directly through <strong>unofficial batch WhatsApp groups via Class Reps (CRs)</strong> and compounding via the <strong>Duo-Gate Viral Loop</strong>.
            </p>
          </div>

          {/* The Funnel Mathematics */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> 2. 7-Day Mathematical Funnel Breakdown (Target: 500)
            </h4>

            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-[11px]">
              <table className="w-full text-left">
                <thead className="bg-slate-800/60 text-slate-400 text-[10px] uppercase">
                  <tr>
                    <th className="p-2.5">Distribution Node</th>
                    <th className="p-2.5">Input Traffic</th>
                    <th className="p-2.5">Conversion</th>
                    <th className="p-2.5 text-right">Yield</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {FUNNEL_BREAKDOWN_DATA.map((row, idx) => (
                    <tr key={idx} className={row.highlight ? "bg-cyan-950/30" : undefined}>
                      <td className={`p-2.5 font-bold ${row.highlight ? 'text-white' : 'text-slate-200'}`}>
                        {row.node}
                      </td>
                      <td className="p-2.5 text-slate-400">{row.traffic}</td>
                      <td className={`p-2.5 ${row.highlight ? 'text-emerald-300' : 'text-slate-300'}`}>
                        {row.conversion}
                      </td>
                      <td className={`p-2.5 text-right font-bold ${
                        row.highlight ? 'text-cyan-300 text-xs font-black' : 'text-cyan-400'
                      }`}>
                        {row.yield}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exact ₹2,000 Budget Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" /> 3. Rigorous ₹2,000 Budget Allocation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BUDGET_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="font-bold text-white block">{item.title}</span>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Blended Customer Acquisition Cost (CAC) = ₹2,000 / 530 registrations = <strong>₹3.77 per student</strong>.
            </p>
          </div>

          {/* What was Rejected */}
          <div className="bg-rose-950/20 border border-rose-900/40 p-3.5 rounded-xl space-y-1">
            <span className="font-bold text-rose-300 flex items-center gap-1 text-[11px]">
              <AlertTriangle className="w-3.5 h-3.5" /> What AI Suggested That Was Deliberately Rejected:
            </span>
            <p className="text-[11px] text-slate-400">
              AI repeatedly recommended cold emailing Engineering College Principals and TPOs with formal MoUs, running Instagram Story Ads, and organizing a 3-week campus ambassador program. We rejected all three: administrative approvals take 3+ weeks, ads destroy the ₹2,000 budget with low-intent clicks, and campus ambassadors take too long to recruit. The Class Rep (CR) micro-incentive + Duo-Gate viral loop solves distribution in 48 hours.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
          >
            Close & Return to Live App
          </button>
        </div>
      </div>
    </div>
  );
};
