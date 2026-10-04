import React, { useState } from 'react';
import { Sparkles, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target, HelpCircle } from 'lucide-react';

interface PresetAnalysis {
  title: string;
  category: string;
  atsScore: number;
  vivaRisk: 'HIGH' | 'MEDIUM' | 'LOW';
  recruiterVerdict: string;
  examinerTrap: string;
  missingTech: string[];
  workshopUpgrade: string;
}

const PRESETS: PresetAnalysis[] = [
  {
    title: "Basic Classifier (Iris / Spam / House Price)",
    category: "Traditional ML",
    atsScore: 28,
    vivaRisk: "HIGH",
    recruiterVerdict: "Instant rejection: Flagged as a 1st-year tutorial copy with zero commercial relevance.",
    examinerTrap: "Examiner will ask: 'Why did you use an 8-year-old static CSV rather than live data streams or semantic vector embeddings?'",
    missingTech: ["Vector Embeddings", "FastAPI Orchestration", "Dynamic Data Ingestion", "Live Deployment"],
    workshopUpgrade: "Replace with a Live Document Q&A RAG App with sub-400ms semantic search."
  },
  {
    title: "Facial Recognition / OpenCV Attendance",
    category: "Computer Vision",
    atsScore: 46,
    vivaRisk: "HIGH",
    recruiterVerdict: "Tired cliche: Over 40% of tier-3 batches submit this identical project from YouTube tutorials.",
    examinerTrap: "Examiner will ask: 'How does your Haar cascade / ResNet model handle lighting variations and adversarial spoofing attacks?'",
    missingTech: ["LLM Inference", "Vector Search Index", "Guardrail Sanitization", "Production REST API"],
    workshopUpgrade: "Upgrade to Multi-Modal RAG with Vector Search and Cloud Hosting."
  },
  {
    title: "Basic OpenAI API / HuggingFace Wrapper",
    category: "GenAI Wrapper",
    atsScore: 58,
    vivaRisk: "MEDIUM",
    recruiterVerdict: "Lacks engineering depth: Merely passing strings to an external endpoint without state or grounding.",
    examinerTrap: "Examiner will ask: 'How do you prevent severe hallucinations and token budget exhaustion on custom PDFs?'",
    missingTech: ["HNSW Vector Indexing", "Recursive Chunking", "Prompt Injection Guardrails", "Docker Container"],
    workshopUpgrade: "Implement a hybrid Pinecone/Chroma RAG pipeline with Groq LPU acceleration."
  },
  {
    title: "Smart Document Q&A App (RAG + Vector Search)",
    category: "Production RAG",
    atsScore: 94,
    vivaRisk: "LOW",
    recruiterVerdict: "Tier-1 Placement Ready: Demonstrates enterprise retrieval, low latency, and modern LLM architecture.",
    examinerTrap: "Examiner will probe: 'Why HNSW over Flat L2 indexing, and how do you calculate chunk overlap?' (Covered in Viva Pack!)",
    missingTech: ["Everything Included in 60-Min Workshop"],
    workshopUpgrade: "100% Defense-Ready with live URL, 94/100 ATS resume bullet, and Viva cheatsheet."
  }
];

export const ProjectAnalyzerTab: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const active = PRESETS[selectedPreset];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Tool Header */}
      <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
              Interactive Diagnostic
            </span>
            <span className="text-xs font-bold text-white">AI Project &amp; Viva Readiness Evaluator</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulates external viva examiner interrogation and ATS resume screening before you submit.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-lg">
            Batch 2026/2027 Diagnostic Engine
          </span>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-300">
          Select or compare a typical final-year project archetype:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedPreset(idx);
                setIsCustom(false);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedPreset === idx && !isCustom
                  ? 'bg-cyan-950/40 border-cyan-500/80 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider block opacity-70">
                {p.category}
              </span>
              <span className="text-xs font-bold block mt-1 line-clamp-1">{p.title}</span>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
                <span>ATS Score:</span>
                <span className={p.atsScore >= 80 ? 'text-emerald-400 font-bold' : p.atsScore >= 50 ? 'text-amber-400' : 'text-rose-400'}>
                  {p.atsScore}/100
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Diagnostic Results Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-800 pb-5">
          {/* Score Meter */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-mono font-black text-xl shrink-0 border ${
              active.atsScore >= 80 
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' 
                : active.atsScore >= 50 
                ? 'bg-amber-950/60 border-amber-500/50 text-amber-300' 
                : 'bg-rose-950/60 border-rose-500/50 text-rose-300'
            }`}>
              <span>{active.atsScore}</span>
              <span className="text-[9px] uppercase font-normal tracking-tight text-slate-400">/ 100</span>
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Placement ATS Score</span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {active.atsScore >= 80 ? 'Top 5% recruiter shortlisting' : 'High rejection risk in campus drives'}
              </p>
            </div>
          </div>

          {/* Viva Vulnerability Risk */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-mono font-black text-sm shrink-0 border ${
              active.vivaRisk === 'LOW'
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                : active.vivaRisk === 'MEDIUM'
                ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
                : 'bg-rose-950/60 border-rose-500/50 text-rose-300'
            }`}>
              <span>{active.vivaRisk}</span>
              <span className="text-[9px] uppercase font-normal tracking-tight text-slate-400">VIVA RISK</span>
            </div>
            <div>
              <span className="text-xs font-bold text-white block">External Examiner Defense</span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {active.vivaRisk === 'LOW' ? 'Armed with architectural rationale' : 'Vulnerable to cross-examination'}
              </p>
            </div>
          </div>

          {/* Target Status */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold">60-Min Workshop Solution:</span>
            <span className="text-xs font-bold text-white mt-1">
              {active.atsScore >= 80 ? 'Master live deployment' : 'Upgrade to RAG Document Q&A'}
            </span>
            <p className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free scholarship entry
            </p>
          </div>
        </div>

        {/* Detailed Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Recruiter / Placement Screen */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>Campus Recruiter Reality Check</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              {active.recruiterVerdict}
            </p>
          </div>

          {/* External Examiner Grill Trap */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>8th-Sem External Examiner Trap Question</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px] italic bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              "{active.examinerTrap}"
            </p>
          </div>
        </div>

        {/* Missing Elements vs What 60-Minute Workshop Delivers */}
        <div className="bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-950 p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">How the 60-Minute Workshop Solves This:</span>
            </div>
            <p className="text-xs text-cyan-200">
              {active.workshopUpgrade} Includes runnable repo, ATS bullet templates, and the 8th-sem Viva Defense Pack.
            </p>
          </div>

          <a
            href="#root"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shrink-0"
          >
            <span>Register Free for Workshop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
