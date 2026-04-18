import React, { useState, useEffect, useRef } from 'react';
import { Palette, X } from 'lucide-react';

const THEMES = [
  { id: 'blue',   label: 'Blue',   color: '#2563eb' },
  { id: 'purple', label: 'Purple', color: '#7c3aed' },
  { id: 'rose',   label: 'Rose',   color: '#e11d48' },
  { id: 'green',  label: 'Green',  color: '#059669' },
  { id: 'orange', label: 'Orange', color: '#ea580c' },
  { id: 'black',  label: 'Black',  color: '#0f172a' },
];

const ColorPanel = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => localStorage.getItem('portfolio-theme') || 'blue');
  const panelRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', active);
    localStorage.setItem('portfolio-theme', active);
  }, [active]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={panelRef} className="fixed left-4 bottom-24 z-50 flex flex-col items-start gap-2">
      {/* Panel */}
      {open && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-4 w-44 animate-fadeIn">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Theme Color</span>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-2">
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-sm font-medium ${
                  active === t.id
                    ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full border-2 flex-shrink-0 transition-transform"
                  style={{
                    backgroundColor: t.color,
                    borderColor: active === t.id ? t.color : 'transparent',
                    boxShadow: active === t.id ? `0 0 0 2px white, 0 0 0 4px ${t.color}` : 'none',
                    transform: active === t.id ? 'scale(1.15)' : 'scale(1)',
                  }}
                />
                {t.label}
                {active === t.id && <span className="ml-auto text-[10px] font-bold" style={{ color: t.color }}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        title="Change theme color"
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transition-all active:scale-90 hover:scale-105"
        style={{ backgroundColor: THEMES.find(t => t.id === active)?.color }}
      >
        <Palette className="w-5 h-5" />
      </button>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px) scale(0.97); } to { opacity:1; transform:none; } }
        .animate-fadeIn { animation: fadeIn 0.18s ease forwards; }
      `}</style>
    </div>
  );
};

export default ColorPanel;
