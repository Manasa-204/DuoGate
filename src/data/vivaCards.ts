import { VivaCard } from '../types';

export const VIVA_CARDS: VivaCard[] = [
  {
    id: 1,
    category: "Architecture & RAG",
    q: "Why use Retrieval-Augmented Generation (RAG) rather than fine-tuning an open-source model like Llama-3?",
    a: "Fine-tuning modifies parameterized weights to alter model style and syntax, but it hallucinates domain-specific facts and incurs massive GPU retraining expenses. RAG preserves the base model, dynamically indexes external non-parametric document vectors with sub-second retrieval, guarantees zero training costs, and provides strict factual traceability with citations for project viva and placement interview compliance."
  },
  {
    id: 2,
    category: "Retrieval & Vector Math",
    q: "How does your chunking strategy & overlap parameter directly influence cosine similarity lookup?",
    a: "Fixed character chunking fractures logical sentences. We implement a Recursive Character Splitter (500 tokens, 10% overlap / 50 tokens). The overlap preserves semantic boundary context across chunk edges, preventing fragmented vector embeddings that otherwise degrade top-k Cosine Similarity from 0.88 down to 0.54."
  },
  {
    id: 3,
    category: "Performance & Indexing",
    q: "Explain why HNSW indexing is superior to Flat (brute-force) L2 indexing in your vector database.",
    a: "Flat Index performs exhaustive brute-force distance comparison with O(N * d) complexity, causing unviable retrieval latency at 50,000+ chunks. Hierarchical Navigable Small World (HNSW) constructs multi-layered skip-list proximity graphs, achieving approximate nearest-neighbor retrieval in O(log N) runtime at ~380ms with 98.4% recall."
  },
  {
    id: 4,
    category: "Security & Production",
    q: "How did you prevent Indirect Prompt Injection and system prompt extraction during live viva testing?",
    a: "We implemented a dual-guardrail architecture: First, strict structural separation using XML tags separating system instructions from untrusted user chunks. Second, an auxiliary regex and lightweight classifier layer that intercepts malicious injection sequences (e.g. 'ignore previous instructions') before vector search ingestion."
  }
];
