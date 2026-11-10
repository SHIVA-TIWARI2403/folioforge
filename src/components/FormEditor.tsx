import React, { useState } from 'react';
import { User, Briefcase, FolderGit2, Sparkles, GraduationCap, Palette, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { ProfileData, Experience, ProjectItem, SkillGroup, Education } from '../types';

interface FormEditorProps {
  data: ProfileData;
  onChange: (updated: ProfileData) => void;
}

export const FormEditor: React.FC<FormEditorProps> = ({ data, onChange }) => {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'projects' | 'skills' | 'education' | 'theme'>('personal');

  // Helper updates
  const updatePersonal = (field: keyof ProfileData['personal'], value: string) => {
    onChange({
      ...data,
      personal: { ...data.personal, [field]: value }
    });
  };

  const updateTheme = (field: keyof ProfileData['theme'], value: string) => {
    onChange({
      ...data,
      theme: { ...data.theme, [field]: value }
    });
  };

  // Experience Handlers
  const addExperience = () => {
    const newExp: Experience = {
      id: `exp-${Date.now()}`,
      role: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      highlights: [""]
    };
    onChange({ ...data, experiences: [...data.experiences, newExp] });
  };

  const removeExperience = (id: string) => {
    onChange({ ...data, experiences: data.experiences.filter(e => e.id !== id) });
  };

  const updateExpField = (id: string, field: keyof Experience, value: any) => {
    onChange({
      ...data,
      experiences: data.experiences.map(e => e.id === id ? { ...e, [field]: value } : e)
    });
  };

  // Project Handlers
  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: "",
      category: "Software",
      tagline: "",
      description: "",
      tags: [],
      liveUrl: "",
      githubUrl: ""
    };
    onChange({ ...data, projects: [...data.projects, newProj] });
  };

  const removeProject = (id: string) => {
    onChange({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  const updateProjField = (id: string, field: keyof ProjectItem, value: any) => {
    onChange({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    });
  };

  // Skill Handlers
  const addSkillGroup = () => {
    const newGroup: SkillGroup = {
      id: `sg-${Date.now()}`,
      category: "Core Tech",
      skills: ["React", "TypeScript"]
    };
    onChange({ ...data, skillGroups: [...data.skillGroups, newGroup] });
  };

  const removeSkillGroup = (id: string) => {
    onChange({ ...data, skillGroups: data.skillGroups.filter(s => s.id !== id) });
  };

  // Education Handlers
  const addEducation = () => {
    const newEdu: Education = {
      id: `edu-${Date.now()}`,
      degree: "",
      institution: "",
      year: "",
      details: ""
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const removeEducation = (id: string) => {
    onChange({ ...data, education: data.education.filter(e => e.id !== id) });
  };

  return (
    <div className="flex flex-col h-full bg-[#0b1f15]/30 border-r border-white/10 select-none">
      {/* Editor Navigation Bar */}
      <div className="flex items-center gap-1 p-2 bg-black/40 border-b border-white/10 overflow-x-auto">
        {[
          { id: 'personal', label: 'Personal', icon: <User className="w-3.5 h-3.5" /> },
          { id: 'experience', label: 'Experience', icon: <Briefcase className="w-3.5 h-3.5" /> },
          { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
          { id: 'skills', label: 'Skills', icon: <Sparkles className="w-3.5 h-3.5" /> },
          { id: 'education', label: 'Education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
          { id: 'theme', label: 'Theme', icon: <Palette className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-forest-700/80 text-forest-100 border border-forest-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Editor Form Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {/* PERSONAL INFO TAB */}
        {activeTab === 'personal' && (
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4 text-forest-400" />
                <span>Personal & Profile Info</span>
              </h3>
              <p className="text-xs text-slate-400">Basic details, professional summary, and online coordinates.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={data.personal.fullName}
                  onChange={(e) => updatePersonal('fullName', e.target.value)}
                  placeholder="e.g. Shiva Tiwari"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Professional Title / Headline</label>
                <input
                  type="text"
                  value={data.personal.headline}
                  onChange={(e) => updatePersonal('headline', e.target.value)}
                  placeholder="e.g. Full-Stack Developer & AI Systems Architect"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={data.personal.email}
                  onChange={(e) => updatePersonal('email', e.target.value)}
                  placeholder="shiva@example.com"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone</label>
                <input
                  type="text"
                  value={data.personal.phone}
                  onChange={(e) => updatePersonal('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  value={data.personal.location}
                  onChange={(e) => updatePersonal('location', e.target.value)}
                  placeholder="e.g. Ayodhya, India"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Website URL</label>
                <input
                  type="url"
                  value={data.personal.website}
                  onChange={(e) => updatePersonal('website', e.target.value)}
                  placeholder="https://yourportfolio.dev"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">GitHub Profile</label>
                <input
                  type="url"
                  value={data.personal.github}
                  onChange={(e) => updatePersonal('github', e.target.value)}
                  placeholder="https://github.com/username"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  value={data.personal.linkedin}
                  onChange={(e) => updatePersonal('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3 py-2 text-xs rounded-lg glass-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Executive Summary / Bio</label>
              <textarea
                rows={3}
                value={data.personal.bio}
                onChange={(e) => updatePersonal('bio', e.target.value)}
                placeholder="Brief summary of your background, technical specialty, and achievements..."
                className="w-full px-3 py-2 text-xs rounded-lg glass-input resize-none"
              />
            </div>
          </div>
        )}

        {/* WORK EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-forest-400" />
                  <span>Work Experience</span>
                </h3>
                <p className="text-xs text-slate-400">Roles, companies, dates, and bullet achievements.</p>
              </div>
              <button
                onClick={addExperience}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-forest-700/80 hover:bg-forest-600 text-white border border-forest-500/50 transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Role</span>
              </button>
            </div>

            {data.experiences.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 text-xs">
                No experience added yet. Click "+ Add Role" to populate your career history.
              </div>
            ) : (
              data.experiences.map((exp, idx) => (
                <div key={exp.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3 relative group">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-xs font-mono text-forest-300">#0{idx + 1} Role Entry</span>
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="p-1 rounded text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Job Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => updateExpField(exp.id, 'role', e.target.value)}
                        placeholder="e.g. Senior Frontend Engineer"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExpField(exp.id, 'company', e.target.value)}
                        placeholder="e.g. Google / Microsoft / Startup"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExpField(exp.id, 'startDate', e.target.value)}
                        placeholder="e.g. Jan 2023"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.current ? 'Present' : exp.endDate}
                        disabled={exp.current}
                        onChange={(e) => updateExpField(exp.id, 'endDate', e.target.value)}
                        placeholder="e.g. Present"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Bullet Achievements (One per line)</label>
                    <textarea
                      rows={3}
                      value={exp.highlights.join('\n')}
                      onChange={(e) => updateExpField(exp.id, 'highlights', e.target.value.split('\n'))}
                      placeholder="• Engineered scalable architecture...&#10;• Reduced latency by 40%..."
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input resize-none"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-maroon-400" />
                  <span>Featured Projects</span>
                </h3>
                <p className="text-xs text-slate-400">Showcase software, case studies, or research work.</p>
              </div>
              <button
                onClick={addProject}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-maroon-700/80 hover:bg-maroon-600 text-white border border-maroon-500/50 transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            {data.projects.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 text-xs">
                No projects added yet. Click "+ Add Project" to showcase your software.
              </div>
            ) : (
              data.projects.map((proj, idx) => (
                <div key={proj.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-xs font-mono text-maroon-300">#0{idx + 1} Project</span>
                    <button
                      onClick={() => removeProject(proj.id)}
                      className="p-1 rounded text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Project Name</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => updateProjField(proj.id, 'title', e.target.value)}
                        placeholder="e.g. ToolMatrix AI"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Tagline / Category</label>
                      <input
                        type="text"
                        value={proj.tagline}
                        onChange={(e) => updateProjField(proj.id, 'tagline', e.target.value)}
                        placeholder="e.g. AI Comparison Engine"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Live URL (Optional)</label>
                      <input
                        type="url"
                        value={proj.liveUrl || ''}
                        onChange={(e) => updateProjField(proj.id, 'liveUrl', e.target.value)}
                        placeholder="https://myapp.vercel.app"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">GitHub Repo URL (Optional)</label>
                      <input
                        type="url"
                        value={proj.githubUrl || ''}
                        onChange={(e) => updateProjField(proj.id, 'githubUrl', e.target.value)}
                        placeholder="https://github.com/user/repo"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => updateProjField(proj.id, 'description', e.target.value)}
                      placeholder="What problem does it solve and what is its impact?"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Tech Stack Tags (Comma separated)</label>
                    <input
                      type="text"
                      value={proj.tags.join(', ')}
                      onChange={(e) => updateProjField(proj.id, 'tags', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                      placeholder="React, TypeScript, FastAPI, PostgreSQL"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-forest-300" />
                  <span>Skills & Competencies</span>
                </h3>
                <p className="text-xs text-slate-400">Group skills into domains (Frontend, Backend, AI, Cloud).</p>
              </div>
              <button
                onClick={addSkillGroup}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-forest-700/80 hover:bg-forest-600 text-white border border-forest-500/50 transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Skill Group</span>
              </button>
            </div>

            {data.skillGroups.map((group, idx) => (
              <div key={group.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <input
                    type="text"
                    value={group.category}
                    onChange={(e) => {
                      const updated = data.skillGroups.map(g => g.id === group.id ? { ...g, category: e.target.value } : g);
                      onChange({ ...data, skillGroups: updated });
                    }}
                    placeholder="Category Name"
                    className="font-bold text-xs bg-transparent border-none text-forest-300 focus:outline-none"
                  />
                  <button
                    onClick={() => removeSkillGroup(group.id)}
                    className="p-1 rounded text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Skills (Comma separated)</label>
                  <input
                    type="text"
                    value={group.skills.join(', ')}
                    onChange={(e) => {
                      const updated = data.skillGroups.map(g => g.id === group.id ? { ...g, skills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) } : g);
                      onChange({ ...data, skillGroups: updated });
                    }}
                    placeholder="React, TypeScript, Next.js, Tailwind"
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-forest-400" />
                  <span>Education & Academics</span>
                </h3>
                <p className="text-xs text-slate-400">Degrees, colleges, certifications, or diplomas.</p>
              </div>
              <button
                onClick={addEducation}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-forest-700/80 hover:bg-forest-600 text-white border border-forest-500/50 transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Education</span>
              </button>
            </div>

            {data.education.map((edu, idx) => (
              <div key={edu.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-xs font-mono text-forest-300">#0{idx + 1} Degree Entry</span>
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="p-1 rounded text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Degree / Certificate</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => {
                        const updated = data.education.map(ed => ed.id === edu.id ? { ...ed, degree: e.target.value } : ed);
                        onChange({ ...data, education: updated });
                      }}
                      placeholder="e.g. B.Tech Computer Science"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Institution / University</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => {
                        const updated = data.education.map(ed => ed.id === edu.id ? { ...ed, institution: e.target.value } : ed);
                        onChange({ ...data, education: updated });
                      }}
                      placeholder="e.g. University of Technology"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Year / Period</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => {
                        const updated = data.education.map(ed => ed.id === edu.id ? { ...ed, year: e.target.value } : ed);
                        onChange({ ...data, education: updated });
                      }}
                      placeholder="e.g. 2020 — 2024"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Honors / Grades</label>
                    <input
                      type="text"
                      value={edu.details}
                      onChange={(e) => {
                        const updated = data.education.map(ed => ed.id === edu.id ? { ...ed, details: e.target.value } : ed);
                        onChange({ ...data, education: updated });
                      }}
                      placeholder="e.g. First Class with Distinction"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg glass-input"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* THEME & AESTHETIC TAB */}
        {activeTab === 'theme' && (
          <div className="space-y-5">
            <div className="border-b border-white/10 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Palette className="w-4 h-4 text-forest-400" />
                <span>Theme &amp; Typography</span>
              </h3>
              <p className="text-xs text-slate-400">Customize the Forest Green &amp; Maroon balance and font moods.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Color Accent Harmony</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'blend', label: 'Forest & Maroon', desc: 'Dual balance' },
                  { id: 'forest', label: 'Deep Forest', desc: 'Pine emphasis' },
                  { id: 'maroon', label: 'Velvet Maroon', desc: 'Crimson emphasis' },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => updateTheme('accentColor', th.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      data.theme.accentColor === th.id
                        ? 'bg-forest-900/60 border-forest-400 shadow-glass-glow-forest text-white'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{th.label}</div>
                    <div className="text-[10px] text-slate-400">{th.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Typography Vibe</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'sans', label: 'Plus Jakarta Sans', desc: 'Modern & Clean Tech' },
                  { id: 'serif', label: 'Playfair Display', desc: 'Editorial & Luxury' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => updateTheme('fontStyle', f.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      data.theme.fontStyle === f.id
                        ? 'bg-forest-900/60 border-forest-400 text-white shadow-glass-glow-forest'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{f.label}</div>
                    <div className="text-[10px] text-slate-400">{f.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
