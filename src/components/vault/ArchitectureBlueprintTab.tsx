import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, ShieldCheck, Cpu, Database, Terminal, Clock, RefreshCw } from 'lucide-react';

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
  const [viewMode, setViewMode] = useState<'blueprint' | 'simulator'>('blueprint');
  const [queryText, setQueryText] = useState<string>("How does recursive chunking prevent semantic context loss?");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [simResult, setSimResult] = useState<boolean>(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimResult(false);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 500);
    setTimeout(() => setSimStep(3), 1100);
    setTimeout(() => setSimStep(4), 1600);
    setTimeout(() => {
      setSimStep(5);
      setIsSimulating(false);
      setSimResult(true);
    }, 2100);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* View Toggle */}
      <div className="flex items-center justify-between bg-slate-950 p-2 rounded-xl border border-slate-800 text-xs">
        <span className="text-slate-400 font-medium">Choose Blueprint Mode:</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewMode('blueprint')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
              viewMode === 'blueprint'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture Diagram</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('simulator')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
              viewMode === 'simulator'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Live Query Simulator</span>
          </button>
        </div>
      </div>

      {viewMode === 'blueprint' ? (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-xs overflow-x-auto text-cyan-300 shadow-inner">
          <div className="text-slate-500 mb-2">// Interactive System Architecture: 60-Minute Guided RAG App Blueprint</div>
          <pre className="leading-relaxed">{DIAGRAM_ASCII}</pre>
        </div>
      ) : (
        /* Live Query Pipeline Simulator */
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-inner text-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Live Sub-400ms RAG Inference Simulation
              </span>
              <p className="text-[11px] text-slate-400">
                Tests the exact FastAPI + Pinecone + Groq LPU pipeline you construct in the 60-minute session.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              Target Latency: &lt;380ms
            </span>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300">Test Query to Execute:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
              <button
                type="button"
                disabled={isSimulating}
                onClick={runSimulation}
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shrink-0 disabled:opacity-50"
              >
                {isSimulating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
                <span>{isSimulating ? 'Simulating...' : 'Run Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Stepper Pipeline Execution Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2 font-mono text-[10px]">
            <div className={`p-2.5 rounded-xl border transition-all ${
              simStep >= 1 ? 'bg-cyan-950/40 border-cyan-500/80 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}>
              <span className="block font-bold">1. Guardrail</span>
              <span className="text-[9px] opacity-80">XML Sanitizer</span>
              <span className="block mt-1 text-emerald-400">{simStep >= 1 ? '✓ Pass' : 'Ready'}</span>
            </div>

            <div className={`p-2.5 rounded-xl border transition-all ${
              simStep >= 2 ? 'bg-cyan-950/40 border-cyan-500/80 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}>
              <span className="block font-bold">2. Embeddings</span>
              <span className="text-[9px] opacity-80">384-dim Dense</span>
              <span className="block mt-1 text-emerald-400">{simStep >= 2 ? '✓ 42ms' : 'Waiting'}</span>
            </div>

            <div className={`p-2.5 rounded-xl border transition-all ${
              simStep >= 3 ? 'bg-cyan-950/40 border-cyan-500/80 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}>
              <span className="block font-bold">3. HNSW Search</span>
              <span className="text-[9px] opacity-80">Cosine 0.942</span>
              <span className="block mt-1 text-emerald-400">{simStep >= 3 ? '✓ Top-4 Chunks' : 'Waiting'}</span>
            </div>

            <div className={`p-2.5 rounded-xl border transition-all ${
              simStep >= 4 ? 'bg-cyan-950/40 border-cyan-500/80 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-500'
            }`}>
              <span className="block font-bold">4. Grounding</span>
              <span className="text-[9px] opacity-80">Context Prompt</span>
              <span className="block mt-1 text-emerald-400">{simStep >= 4 ? '✓ 1,420 Tok' : 'Waiting'}</span>
            </div>

            <div className={`p-2.5 rounded-xl border transition-all ${
              simStep >= 5 ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}>
              <span className="block font-bold">5. Groq Stream</span>
              <span className="text-[9px] opacity-80">Llama-3 70B</span>
              <span className="block mt-1 text-emerald-400">{simStep >= 5 ? '✓ 342ms TTFT' : 'Waiting'}</span>
            </div>
          </div>

          {/* Simulated Answer Output */}
          {simResult && (
            <div className="bg-slate-900/90 border border-emerald-500/40 rounded-xl p-4 space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Grounded Answer Verified (Confidence: 98.4%)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Total Latency: 342ms</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                Recursive Character Chunking divides large documents at paragraph and sentence delimiters while enforcing a 10% token overlap (50 tokens across 500-token chunks). This preserves co-reference context across chunk boundaries, preventing cosine similarity drops during vector retrieval.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[10px] font-mono text-cyan-400">
                <span>[Source: Capstone_Architecture_Doc_v2.pdf • Chunk #14 • Cosine: 0.942]</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3 Metric Cards */}
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
