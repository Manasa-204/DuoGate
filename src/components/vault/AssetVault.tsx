import React, { useState } from 'react';
import { Database, FileText, HelpCircle, Layers, Clock } from 'lucide-react';
import { VaultTab } from '../../types';
import { ResumeBuilderTab } from './ResumeBuilderTab';
import { VivaSimulatorTab } from './VivaSimulatorTab';
import { ArchitectureBlueprintTab } from './ArchitectureBlueprintTab';
import { CurriculumTimelineTab } from './CurriculumTimelineTab';

export const AssetVault: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VaultTab>('resume');

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full space-y-6">
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Capstone & Placement Asset Vault</h3>
                <p className="text-xs text-slate-400">
                  Live preview of the technical deliverables you construct and master in the 60-minute session.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 overflow-x-auto text-xs no-scrollbar">
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'resume' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume Builder</span>
            </button>

            <button
              onClick={() => setActiveTab('viva')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'viva' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>8th-Sem Viva Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('arch')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'arch' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture Blueprint</span>
            </button>

            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'curriculum' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>60-Min Timeline</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'resume' && <ResumeBuilderTab />}
        {activeTab === 'viva' && <VivaSimulatorTab />}
        {activeTab === 'arch' && <ArchitectureBlueprintTab />}
        {activeTab === 'curriculum' && <CurriculumTimelineTab />}
      </div>
    </section>
  );
};
