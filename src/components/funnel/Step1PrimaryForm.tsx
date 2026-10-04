import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PrimaryUser } from '../../types';
import { BRANCHES } from '../../data/branches';
import { CollegeAutocomplete } from './CollegeAutocomplete';

interface Step1PrimaryFormProps {
  primaryUser: PrimaryUser;
  onChangeUser: (updated: PrimaryUser) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const Step1PrimaryForm: React.FC<Step1PrimaryFormProps> = ({
  primaryUser,
  onChangeUser,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="border-l-2 border-cyan-500 pl-3 mb-4">
        <h3 className="text-base font-bold text-white">Student Registration Details</h3>
        <p className="text-xs text-slate-400">Verify your college enrollment to secure official batch access.</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name (As per College ID)</label>
        <input
          type="text"
          required
          value={primaryUser.name}
          onChange={(e) => onChangeUser({ ...primaryUser, name: e.target.value })}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="e.g., Harsh Vardhan"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official Student / Personal Email</label>
          <input
            type="email"
            required
            value={primaryUser.email}
            onChange={(e) => onChangeUser({ ...primaryUser, email: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="harsh.cse2026@gmail.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Number (+91)</label>
          <input
            type="tel"
            required
            value={primaryUser.phone}
            onChange={(e) => onChangeUser({ ...primaryUser, phone: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="9876543210"
          />
        </div>
      </div>

      {/* College Autocomplete Dropdown */}
      <CollegeAutocomplete
        value={primaryUser.college}
        onChange={(_, shortName) => {
          onChangeUser({ ...primaryUser, college: shortName });
        }}
      />

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Engineering Branch</label>
        <select
          value={primaryUser.branch}
          onChange={(e) => onChangeUser({ ...primaryUser, branch: e.target.value })}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
        >
          {BRANCHES.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="pt-3">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all text-sm group"
        >
          <span>Continue to Capstone Partner Unlock</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
        <p className="text-center text-[11px] text-slate-500 mt-2.5 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Free 100% scholarship entry. No payment credentials required.
        </p>
      </div>
    </form>
  );
};
