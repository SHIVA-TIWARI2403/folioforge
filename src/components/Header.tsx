import React from 'react';
import { Layers, Printer, Download, Upload, Sparkles, RefreshCw, Eye, Edit3, Monitor, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData } from '../types';
import { printResume, exportSinglePageHtml, exportJson } from '../utils/exportHelpers';
import { SHIVA_TIWARI_SAMPLE, BLANK_PROFILE } from '../data/sampleProfiles';

interface HeaderProps {
  data: ProfileData;
  onUpdateData: (newData: ProfileData) => void;
  viewMode: 'portfolio' | 'resume';
  onToggleViewMode: (mode: 'portfolio' | 'resume') => void;
  layoutMode: 'split' | 'editor' | 'preview';
  onToggleLayoutMode: (mode: 'split' | 'editor' | 'preview') => void;
}

export const Header: React.FC<HeaderProps> = ({
  data,
  onUpdateData,
  viewMode,
  onToggleViewMode,
  layoutMode,
  onToggleLayoutMode,
}) => {
  const handleLoadSample = () => {
    onUpdateData(SHIVA_TIWARI_SAMPLE);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#236545', '#871626', '#409e6f']
    });
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the editor?")) {
      onUpdateData(BLANK_PROFILE);
    }
  };

  const handleHtmlExport = () => {
    exportSinglePageHtml(data);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.2 },
      colors: ['#236545', '#871626', '#62be8f']
    });
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        onUpdateData(parsed);
      } catch (err) {
        alert("Invalid JSON profile file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="no-print bg-[#070e0a]/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-forest-700 via-forest-600 to-maroon-700 p-0.5 shadow-lg shadow-forest-900/40">
          <div className="w-full h-full bg-[#070e0a] rounded-[10px] flex items-center justify-center font-bold text-white font-mono text-sm">
            FF
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">FolioForge</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-forest-900/80 text-forest-300 border border-forest-600/30">
              BUILDER
            </span>
          </div>
          <p className="text-[10px] text-slate-400 hidden sm:block">
            Glassmorphic Portfolio &amp; Resume Creator • Forest &amp; Maroon Edition
          </p>
        </div>
      </div>

      {/* Center View Controls: Portfolio vs. Resume */}
      <div className="flex items-center gap-1 p-1 bg-black/40 border border-white/10 rounded-xl">
        <button
          onClick={() => onToggleViewMode('portfolio')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            viewMode === 'portfolio'
              ? 'bg-forest-700 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Web Portfolio</span>
        </button>

        <button
          onClick={() => onToggleViewMode('resume')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            viewMode === 'resume'
              ? 'bg-maroon-700 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>A4 Resume</span>
        </button>
      </div>

      {/* Right Action Tools: Preset Loaders & Exports */}
      <div className="flex items-center gap-2">
        {/* Sample Loader */}
        <button
          onClick={handleLoadSample}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-forest-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all"
          title="Load Sample Software Engineer Data"
        >
          <Sparkles className="w-3.5 h-3.5 text-forest-400" />
          <span className="hidden md:inline">Load Sample</span>
        </button>

        <button
          onClick={handleClear}
          className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:text-red-400 text-slate-400 text-xs transition-colors"
          title="Reset to Blank"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>

        {/* Print / Download PDF */}
        <button
          onClick={printResume}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-forest-800/80 hover:bg-forest-700 text-white border border-forest-500/40 text-xs font-semibold transition-all shadow-sm active:scale-95"
          title="Print or Save as PDF"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / PDF</span>
        </button>

        {/* Export Single Page HTML */}
        <button
          onClick={handleHtmlExport}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-maroon-800/80 hover:bg-maroon-700 text-white border border-maroon-500/40 text-xs font-semibold transition-all shadow-sm active:scale-95"
          title="Download Portable Standalone Portfolio HTML"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export HTML</span>
        </button>

        {/* JSON Import/Export Dropdown/Tools */}
        <button
          onClick={() => exportJson(data)}
          className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white text-xs"
          title="Export JSON Data Backup"
        >
          <Download className="w-3.5 h-3.5 text-forest-300" />
        </button>

        <label
          className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white text-xs cursor-pointer"
          title="Import JSON Profile Data"
        >
          <Upload className="w-3.5 h-3.5 text-maroon-300" />
          <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
        </label>
      </div>
    </header>
  );
};
