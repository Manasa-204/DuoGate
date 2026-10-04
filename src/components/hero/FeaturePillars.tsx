import React from 'react';
import { Code2, Cpu, ShieldCheck, Award } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 max-w-4xl mx-auto text-left text-xs">
      <div className="bg-slate-900/70 border border-slate-800/80 p-3 rounded-xl flex items-start gap-2.5">
        <Code2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-white">Runnable GitHub Repo</h4>
          <p className="text-[11px] text-slate-400">Cloneable boilerplate + modular FastAPI endpoints.</p>
        </div>
      </div>

      <div className="bg-slate-900/70 border border-slate-800/80 p-3 rounded-xl flex items-start gap-2.5">
        <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-white">Hosted Vector DB</h4>
          <p className="text-[11px] text-slate-400">Production indexing with Pinecone & Chroma embeddings.</p>
        </div>
      </div>

      <div className="bg-slate-900/70 border border-slate-800/80 p-3 rounded-xl flex items-start gap-2.5">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-white">8th Sem Viva Pack</h4>
          <p className="text-[11px] text-slate-400">Model answers for tough external examiner inquiries.</p>
        </div>
      </div>

      <div className="bg-slate-900/70 border border-slate-800/80 p-3 rounded-xl flex items-start gap-2.5">
        <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-white">ATS Resume Bullets</h4>
          <p className="text-[11px] text-slate-400">Pre-formatted action verbs and impact metrics.</p>
        </div>
      </div>
    </div>
  );
};
