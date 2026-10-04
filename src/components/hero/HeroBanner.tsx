import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SeatScarcityBar } from '../common/SeatScarcityBar';
import { FeaturePillars } from './FeaturePillars';

interface HeroBannerProps {
  seatsClaimed: number;
  totalTarget: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ seatsClaimed, totalTarget }) => {
  return (
    <section className="relative pt-8 pb-10 px-4 max-w-6xl mx-auto text-center space-y-5">
      {/* Urgent Target Batch Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-950/40">
        <GraduationCap className="w-4 h-4 text-cyan-400" />
        <span>EXCLUSIVE FOR B.TECH / B.E. FINAL-YEAR STUDENTS (2026/2027) • 100% FREE HANDS-ON WORKSHOP</span>
      </div>

      {/* Unified Conversion Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
        Build and Deploy Your First <br />
        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
          RAG AI App in 60 Minutes.
        </span>
      </h1>

      <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
        Zero prior AI/ML experience needed. In this live, hands-on masterclass, engineering students go from scratch to a deployed <strong className="text-white">Smart Document Q&amp;A App (FastAPI + Vector Search + Llama-3)</strong> with a live public URL, ready-to-use ATS resume bullets, and 8th-sem Viva defense prep.
      </p>

      {/* Live Seat Scarcity Gauge */}
      <SeatScarcityBar claimed={seatsClaimed} total={totalTarget} />

      {/* 4 Core Pillars */}
      <FeaturePillars />
    </section>
  );
};
