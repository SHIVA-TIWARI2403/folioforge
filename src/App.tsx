import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FormEditor } from './components/FormEditor';
import { PortfolioPreview } from './components/PortfolioPreview';
import { ResumePreview } from './components/ResumePreview';
import { ProfileData } from './types';
import { SOFTWARE_ENGINEER_SAMPLE } from './data/sampleProfiles';

export function App() {
  const [profileData, setProfileData] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('folioforge_profile_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return SOFTWARE_ENGINEER_SAMPLE;
  });

  const [viewMode, setViewMode] = useState<'portfolio' | 'resume'>('portfolio');
  const [layoutMode, setLayoutMode] = useState<'split' | 'editor' | 'preview'>('split');

  useEffect(() => {
    localStorage.setItem('folioforge_profile_data', JSON.stringify(profileData));
  }, [profileData]);

  return (
    <div className="min-h-screen bg-[#070a08] text-[#f4f7f5] flex flex-col font-sans relative overflow-x-hidden">
      {/* Background Ambient Radial Glows (Forest Green & Maroon) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-forest-700/10 blur-[130px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-maroon-700/10 blur-[130px] pointer-events-none" />

      {/* Control Header */}
      <Header
        data={profileData}
        onUpdateData={setProfileData}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        layoutMode={layoutMode}
        onToggleLayoutMode={setLayoutMode}
      />

      {/* Workspace Area: Split Screen */}
      <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-61px)] overflow-hidden">
        {/* Left Side: Form Editor */}
        <div className={`w-full lg:w-[480px] xl:w-[520px] h-full flex-shrink-0 ${layoutMode === 'preview' ? 'hidden' : 'flex'}`}>
          <FormEditor data={profileData} onChange={setProfileData} />
        </div>

        {/* Right Side: Real-Time Live Preview Pane */}
        <div className={`flex-1 h-full overflow-y-auto bg-black/40 backdrop-blur-md relative ${layoutMode === 'editor' ? 'hidden' : 'block'}`}>
          {/* Subtle Top Badge in Preview */}
          <div className="no-print sticky top-3 right-4 z-20 flex justify-end px-6 pointer-events-none">
            <div className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/60 border border-white/10 text-slate-300 backdrop-blur-md shadow-lg pointer-events-auto flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE PREVIEW: {viewMode.toUpperCase()}</span>
            </div>
          </div>

          <div className="py-8">
            {viewMode === 'portfolio' ? (
              <PortfolioPreview data={profileData} />
            ) : (
              <ResumePreview data={profileData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
