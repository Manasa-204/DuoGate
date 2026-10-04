import { TimelineStep } from '../types';

export const TIMELINE_STEPS: TimelineStep[] = [
  { 
    min: "00 - 10m", 
    title: "Architecture & Fast Environment Setup", 
    desc: "Spin up cloud development workspace, initialize UV/Pip virtual env, configure Groq / OpenAI API endpoints, and import FastAPI & LangChain." 
  },
  { 
    min: "10 - 25m", 
    title: "Document Ingestion & Vector Pipeline", 
    desc: "Build automated PDF/Doc parser, apply recursive chunking, compute 384-dim dense embeddings, and populate high-speed vector index." 
  },
  { 
    min: "25 - 45m", 
    title: "RAG Engine & Guardrail Integration", 
    desc: "Construct hybrid top-k semantic retrieval chain, inject contextual prompts into Llama-3 70B, and verify hallucination thresholds." 
  },
  { 
    min: "45 - 60m", 
    title: "FastAPI Backend + Streamlit + 1-Click Deploy", 
    desc: "Wrap inference in asynchronous REST endpoints, connect Streamlit reactive dashboard, build Dockerfile, and deploy live public URL on Render." 
  }
];
