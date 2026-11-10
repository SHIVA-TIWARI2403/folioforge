import React from 'react';
import { Mail, MapPin, Phone, Globe, Github, Linkedin } from 'lucide-react';
import { ProfileData } from '../types';

interface ResumePreviewProps {
  data: ProfileData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const p = data.personal;
  const isSerif = data.theme.fontStyle === 'serif';

  return (
    <div className="flex justify-center p-2 sm:p-6 overflow-x-auto">
      {/* A4 Container Card */}
      <div
        className={`print-area w-full max-w-[800px] min-h-[1050px] bg-[#0c1410] text-[#e8eee9] border border-white/10 p-8 sm:p-12 shadow-2xl relative ${
          isSerif ? 'font-serif' : 'font-sans'
        }`}
      >
        {/* Header Section */}
        <header className="border-b border-forest-700/40 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print-accent-forest">
                {p.fullName || 'Your Full Name'}
              </h1>
              <div className="text-sm font-semibold text-forest-300 mt-1 uppercase tracking-wider">
                {p.headline || 'Professional Headline'}
              </div>
            </div>
            {p.location && (
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
                <MapPin className="w-3.5 h-3.5 text-forest-400 no-print" />
                <span>{p.location}</span>
              </div>
            )}
          </div>

          {/* Contact coordinates line */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-3 text-xs text-slate-300 font-mono">
            {p.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-maroon-400 no-print" />
                <span>{p.email}</span>
              </span>
            )}
            {p.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400 no-print" />
                <span>{p.phone}</span>
              </span>
            )}
            {p.website && (
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-forest-400 no-print" />
                <span>{p.website.replace(/^https?:\/\//, '')}</span>
              </span>
            )}
            {p.github && (
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400 no-print" />
                <span>{p.github.replace(/^https?:\/\//, '')}</span>
              </span>
            )}
            {p.linkedin && (
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-400 no-print" />
                <span>{p.linkedin.replace(/^https?:\/\//, '')}</span>
              </span>
            )}
          </div>
        </header>

        {/* Executive Summary */}
        {p.bio && (
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-maroon-400 print-accent-maroon border-b border-white/10 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {p.bio}
            </p>
          </section>
        )}

        {/* Experience Section */}
        {data.experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-forest-300 print-accent-forest border-b border-white/10 pb-1 mb-4">
              Work Experience
            </h2>
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-xs font-bold text-white">
                      <span>{exp.role}</span>
                      <span className="text-forest-400 font-semibold"> — {exp.company}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  {exp.location && (
                    <div className="text-[11px] text-maroon-300 font-mono">
                      {exp.location}
                    </div>
                  )}
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside leading-relaxed pt-1">
                    {exp.highlights.filter(Boolean).map((h, idx) => (
                      <li key={idx}>{h.replace(/^[•\-\*]\s*/, '')}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {data.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-maroon-400 print-accent-maroon border-b border-white/10 pb-1 mb-4">
              Key Projects & Systems
            </h2>
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-xs font-bold text-white">
                      <span>{proj.title}</span>
                      <span className="text-slate-400 font-normal"> | {proj.tagline}</span>
                    </div>
                    <div className="text-[11px] font-mono text-forest-400">
                      {proj.tags.join(' • ')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {data.skillGroups.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-forest-300 print-accent-forest border-b border-white/10 pb-1 mb-3">
              Core Competencies & Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {data.skillGroups.map((group) => (
                <div key={group.id}>
                  <span className="font-bold text-slate-200">{group.category}: </span>
                  <span className="text-slate-300">{group.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-maroon-400 print-accent-maroon border-b border-white/10 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-2">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-slate-400"> — {edu.institution}</span>
                    {edu.details && <span className="text-slate-400 block text-[11px]">{edu.details}</span>}
                  </div>
                  <span className="font-mono text-slate-400 text-[11px] shrink-0 ml-4">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
