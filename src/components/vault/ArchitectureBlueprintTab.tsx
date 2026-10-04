import React from 'react';

const DIAGRAM_ASCII = `[Client / User Query]
         │ (POST /v1/query)
         ▼
┌────────────────────────────────────────────────────────┐
│  FastAPI Backend (Asynchronous Orchestration)          │
│   • CORS & Rate-Limiting Guardrails                    │
│   • Prompt Injection Sanitizer                         │
└────────┬───────────────────────────────────────┬───────┘
         │                                       │
         ▼ (Dense Vector Embedding)              ▼ (Cosine Similarity Search)
┌──────────────────────────────┐        ┌──────────────────────────────┐
│ Text-Embedding-3-Small       │        │ Pinecone / Chroma Vector DB  │
│ (384-dimensional latent rep) │        │ (HNSW Indexing, Top-K = 4)   │
└──────────────────────────────┘        └──────────────┬───────────────┘
                                                       │
                                                       ▼ (Retrieved Context Chunks)
                                        ┌──────────────────────────────┐
                                        │ Prompt Assembly & Context    │
                                        │ Grounding Layer              │
                                        └──────────────┬───────────────┘
                                                       │
                                                       ▼ (Sub-400ms Streaming)
                                        ┌──────────────────────────────┐
                                        │ Groq Inference (Llama-3 70B) │
                                        └──────────────┬───────────────┘
                                                       │
                                                       ▼ (Render Markdown Response)
                                        ┌──────────────────────────────┐
                                        │ Streamlit UI / Public Web    │
                                        └──────────────────────────────┘`;

export const ArchitectureBlueprintTab: React.FC = () => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-xs overflow-x-auto text-cyan-300 shadow-inner">
        <div className="text-slate-500 mb-2">// Interactive System Architecture: 60-Minute Guided RAG App Blueprint</div>
        <pre className="leading-relaxed">{DIAGRAM_ASCII}</pre>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-slate-500 block text-[10px] font-mono uppercase font-bold">Latency Benchmark</span>
          <span className="text-white font-mono font-bold text-sm block mt-0.5">380ms Time To First Token</span>
          <span className="text-[11px] text-emerald-400 mt-1 block">Groq LPUs + Streaming API</span>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-slate-500 block text-[10px] font-mono uppercase font-bold">Vector Search Index</span>
          <span className="text-white font-mono font-bold text-sm block mt-0.5">HNSW Approximate NN</span>
          <span className="text-[11px] text-cyan-400 mt-1 block">O(log N) query time</span>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-slate-500 block text-[10px] font-mono uppercase font-bold">Hosting Infrastructure</span>
          <span className="text-white font-mono font-bold text-sm block mt-0.5">Docker Containerized</span>
          <span className="text-[11px] text-indigo-400 mt-1 block">Deployable on Render / Spaces</span>
        </div>
      </div>
    </div>
  );
};
