import React from 'react';
import { Briefcase, Copy, Check } from 'lucide-react';
import { useClipboard } from '../../hooks/useClipboard';

const RESUME_TEXT = 
`• Architected and deployed an end-to-end Retrieval-Augmented Generation (RAG) system utilizing LangChain, Pinecone vector storage, and FastAPI, indexing over 15,000 document tokens for semantic search.
• Engineered an optimized HNSW approximate nearest-neighbor query pipeline reducing retrieval latency from 1.2s to under 380ms while sustaining 94% retrieval relevance.
• Containerized with Docker and orchestrated automated CI/CD deployment pipelines on Cloud VMs, handling live document Q&A queries with automated hallucination guardrails.`;

const TECH_TAGS = [
  'Python 3.11', 
  'FastAPI', 
  'LangChain', 
  'Pinecone Vector DB', 
  'Llama-3 70B', 
  'Docker', 
  'Streamlit UI', 
  'REST APIs'
];

export const ResumeBuilderTab: React.FC = () => {
  const { copy, isCopied } = useClipboard();

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-300">Format: Action Verb + Metric + Technical Architecture</span>
          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
            ATS Score: 94/100
          </span>
        </div>
        <button
          onClick={() => copy(RESUME_TEXT, 'resume-bullets')}
          className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          {isCopied('resume-bullets') ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{isCopied('resume-bullets') ? 'Copied to Clipboard!' : 'Copy Bullets to Resume'}</span>
        </button>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Project Section on Resume (Ready to Paste)</span>
          </div>
          <h4 className="text-sm font-bold text-cyan-300 mt-1">
            Enterprise Document Intelligence & RAG Pipeline (FastAPI, Llama-3, Pinecone)
          </h4>
        </div>

        <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
            <span>
              <strong className="text-white">Architected and deployed an end-to-end Retrieval-Augmented Generation (RAG) system</strong> utilizing LangChain, Pinecone vector storage, and FastAPI, indexing over 15,000 document tokens for high-precision semantic search.
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
            <span>
              <strong className="text-white">Engineered an optimized HNSW approximate nearest-neighbor query pipeline</strong> reducing retrieval latency from 1.2s to under 380ms while sustaining 94% top-k retrieval relevance.
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
            <span>
              <strong className="text-white">Containerized with Docker</strong> and orchestrated automated deployment on cloud endpoints, implementing defensive system prompts and validation guardrails preventing prompt injection exploits.
            </span>
          </li>
        </ul>

        <div className="pt-2 flex flex-wrap gap-1.5">
          {TECH_TAGS.map(tag => (
            <span key={tag} className="text-[10px] font-mono bg-slate-900 border border-slate-700/80 px-2 py-0.5 rounded text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
