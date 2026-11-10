import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe, ExternalLink, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { ProfileData } from '../types';

interface PortfolioPreviewProps {
  data: ProfileData;
}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data }) => {
  const p = data.personal;
  const isSerif = data.theme.fontStyle === 'serif';
  const isMaroon = data.theme.accentColor === 'maroon';
  const isBlend = data.theme.accentColor === 'blend';

  return (
    <div className={`p-6 sm:p-10 max-w-4xl mx-auto space-y-12 ${isSerif ? 'font-serif' : 'font-sans'}`}>
      {/* Hero Section */}
      <div className="relative p-8 rounded-3xl glass-card overflow-hidden border border-white/10 shadow-2xl">
        {/* Subtle Ambient Radial Lighting (Forest Green & Maroon) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-forest-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-forest-900/60 border border-forest-500/30 text-forest-300">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {p.fullName || "Your Full Name"}
            </h1>

            <div className={`text-base sm:text-lg font-medium ${
              isMaroon ? 'text-maroon-300' : isBlend ? 'text-forest-300' : 'text-forest-400'
            }`}>
              {p.headline || "Full-Stack Developer & Designer"}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
              {p.bio || "Write your professional bio, core strengths, and what you are passionate about building."}
            </p>

            {/* Quick Contact & Coordinates */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-300 font-mono">
              {p.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-forest-400" />
                  {p.location}
                </span>
              )}
              {p.email && (
                <a href={`mailto:${p.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-maroon-400" />
                  {p.email}
                </a>
              )}
              {p.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {p.phone}
                </span>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-forest-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-forest-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {p.twitter && (
                <a
                  href={p.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-forest-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-forest-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Avatar if exists */}
          {p.avatarUrl && (
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-forest-500/40 shadow-xl shrink-0 group">
              <img
                src={p.avatarUrl}
                alt={p.fullName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Featured Projects Section */}
      {data.projects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-forest-400" />
              <span>Featured Creations</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {data.projects.length} PROJECTS INDEXED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-forest-400/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-maroon-400 font-semibold">{proj.category}</span>
                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                          title="Live App"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                          title="GitHub Repo"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-forest-300 transition-colors mb-1">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-forest-400 font-mono mb-3">
                    {proj.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {data.experiences.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-maroon-400" />
              <span>Career Experience</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">CHRONOLOGY</span>
          </div>

          <div className="space-y-4">
            {data.experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl glass-card space-y-3 hover:border-maroon-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-base font-bold text-white">
                    {exp.role}{' '}
                    <span className="text-forest-400 font-semibold">@ {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>

                {exp.location && (
                  <div className="text-xs text-maroon-400 font-mono">
                    {exp.location}
                  </div>
                )}

                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  {exp.highlights.filter(Boolean).map((h, hIdx) => (
                    <li key={hIdx}>{h.replace(/^[•\-\*]\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Matrix */}
      {data.skillGroups.length > 0 && (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-forest-300" />
              <span>Technical Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.skillGroups.map((group) => (
              <div key={group.id} className="p-5 rounded-2xl glass-card space-y-3">
                <div className="text-xs font-bold font-mono text-forest-300 uppercase tracking-wider">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-forest-950/60 text-forest-200 border border-forest-700/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-forest-400" />
              <span>Education</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="p-5 rounded-2xl glass-card space-y-1.5">
                <div className="text-sm font-bold text-white">{edu.degree}</div>
                <div className="text-xs text-forest-300 font-medium">{edu.institution}</div>
                <div className="text-[11px] text-slate-400 font-mono">{edu.year}</div>
                {edu.details && (
                  <p className="text-xs text-slate-400 pt-1">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Minimalist Glass Footer */}
      <footer className="pt-8 border-t border-white/10 text-center text-xs font-mono text-slate-400">
        <p>Built with FolioForge • Minimalist Glassmorphic Architecture</p>
      </footer>
    </div>
  );
};
