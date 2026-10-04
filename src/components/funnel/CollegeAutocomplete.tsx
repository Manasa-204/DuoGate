import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { College } from '../../types';
import { COLLEGES_DATA } from '../../data/colleges';

interface CollegeAutocompleteProps {
  value: string;
  onChange: (collegeName: string, shortName: string) => void;
}

export const CollegeAutocomplete: React.FC<CollegeAutocompleteProps> = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync internal search term when prop changes (resolving full name if short code provided)
  useEffect(() => {
    const matched = COLLEGES_DATA.find(c => c.short.toLowerCase() === value.toLowerCase() || c.name.toLowerCase() === value.toLowerCase());
    if (matched) {
      setSearchTerm(matched.name);
    } else {
      setSearchTerm(value || '');
    }
  }, [value]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredColleges = useMemo(() => {
    if (!searchTerm) return COLLEGES_DATA;
    const lower = searchTerm.toLowerCase();
    return COLLEGES_DATA.filter(c => 
      c.name.toLowerCase().includes(lower) || 
      c.short.toLowerCase().includes(lower) ||
      c.state.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const handleSelect = (col: College) => {
    setSearchTerm(col.name);
    onChange(col.name, col.short);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchTerm('');
    onChange('', '');
    setIsOpen(true);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
        <span>Engineering University / College</span>
        <span className="text-[10px] text-cyan-400 font-mono">30+ State Universities</span>
      </label>
      
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onChange(e.target.value, e.target.value);
            setIsOpen(true);
          }}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors pr-16"
          placeholder="Search your college (e.g. VTU, JNTU, AKTU, Anna Univ)..."
        />
        <div className="absolute right-3 top-2.5 flex items-center gap-1.5 text-slate-500">
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:text-slate-300 rounded transition-colors"
              title="Clear selection"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <Search className="w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-slate-900 border border-slate-700 rounded-xl max-h-56 overflow-y-auto shadow-2xl z-30 divide-y divide-slate-800">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((col, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(col)}
                className="px-4 py-2.5 hover:bg-slate-800 cursor-pointer flex items-center justify-between text-xs transition-colors"
              >
                <div>
                  <span className="font-semibold text-white block">{col.name}</span>
                  <span className="text-[10px] text-slate-400">{col.state}</span>
                </div>
                <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-cyan-400 border border-slate-800">
                  Select
                </span>
              </div>
            ))
          ) : (
            <div className="p-3 text-center text-xs text-slate-500">
              College not listed? Type above and hit proceed.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
