import { TimelineStep } from '../types';

export const TIMELINE_STEPS: TimelineStep[] = [
  { 
    min: "00 - 10m", 
    title: "Quick Environment & API Setup", 
    desc: "Spin up cloud development workspace with zero local install, configure Groq / OpenAI API endpoints, and import FastAPI & LangChain." 
  },
  { 
    min: "10 - 25m", 
    title: "Document Ingestion & Vector Search", 
    desc: "Parse sample PDF/text files, split content with recursive chunking, compute dense embeddings, and store them in a high-speed vector index." 
  },
  { 
    min: "25 - 45m", 
    title: "RAG Retrieval & Answer Generation", 
    desc: "Build the semantic search retrieval chain, connect prompt templates with Llama-3, and test grounded answers with live document questions." 
  },
  { 
    min: "45 - 60m", 
    title: "FastAPI Backend & Live Cloud Deployment", 
    desc: "Wrap the app in simple REST endpoints, connect a clean web UI, and deploy to a live public URL to share on your resume and in interviews." 
  }
];
