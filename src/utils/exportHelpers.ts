import { ProfileData } from '../types';

export const printResume = () => {
  window.print();
};

export const exportJson = (data: ProfileData) => {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  const filename = `${(data.personal.fullName || 'portfolio').toLowerCase().replace(/\s+/g, '-')}-data.json`;
  downloadAnchor.setAttribute('download', filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

export const exportSinglePageHtml = (data: ProfileData) => {
  const p = data.personal;
  const isSerif = data.theme.fontStyle === 'serif';

  const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.fullName || 'Portfolio'} — ${p.headline || 'Portfolio'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #070a08;
      color: #f4f7f5;
      font-family: ${isSerif ? "'Playfair Display', Georgia, serif" : "'Plus Jakarta Sans', system-ui, sans-serif"};
      min-height: 100vh;
      line-height: 1.6;
      padding: 0 1rem;
    }
    .container { max-width: 900px; margin: 0 auto; padding: 4rem 1rem; }
    .glass-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 12px 30px rgba(0,0,0,0.4);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 600;
      background: rgba(35, 101, 69, 0.25);
      border: 1px solid rgba(64, 158, 111, 0.4);
      color: #91d6b2;
      margin-bottom: 1rem;
    }
    .title { font-size: 2.8rem; font-weight: 800; color: #ffffff; line-height: 1.1; margin-bottom: 0.5rem; }
    .headline { font-size: 1.25rem; color: #62be8f; font-weight: 500; margin-bottom: 1.5rem; }
    .bio { color: #a0aec0; font-size: 1rem; margin-bottom: 2rem; max-width: 700px; }
    .section-title { font-size: 1.6rem; font-weight: 700; color: #ffffff; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .item-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 1.5rem; }
    .item-title { font-size: 1.2rem; font-weight: 700; color: #f4f7f5; margin-bottom: 0.25rem; }
    .item-sub { font-size: 0.85rem; color: #de5669; margin-bottom: 0.75rem; font-weight: 600; }
    .tag { display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: 6px; background: rgba(255,255,255,0.05); color: #cbd5e0; margin: 2px; }
    .btn { display: inline-block; padding: 10px 24px; border-radius: 10px; background: #236545; color: #fff; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 10px; }
    .btn-maroon { background: #871626; }
    .footer { text-align: center; color: #718096; font-size: 12px; margin-top: 4rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="glass-card">
      <span class="badge">AVAILABLE FOR WORK</span>
      <h1 class="title">${p.fullName || 'Anonymous Creator'}</h1>
      <div class="headline">${p.headline || 'Builder & Creator'}</div>
      <p class="bio">${p.bio || ''}</p>
      <div>
        ${p.email ? `<a class="btn" href="mailto:${p.email}">Get in Touch</a>` : ''}
        ${p.github ? `<a class="btn btn-maroon" href="${p.github}" target="_blank">GitHub</a>` : ''}
        ${p.linkedin ? `<a class="btn" href="${p.linkedin}" target="_blank">LinkedIn</a>` : ''}
      </div>
    </div>

    ${data.projects.length > 0 ? `
    <div class="section-title">Featured Projects</div>
    <div class="grid">
      ${data.projects.map(proj => `
        <div class="item-card">
          <div class="item-title">${proj.title}</div>
          <div class="item-sub">${proj.tagline}</div>
          <p style="font-size: 0.9rem; color: #a0aec0; margin-bottom: 1rem;">${proj.description}</p>
          <div style="margin-bottom: 1rem;">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div>
            ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" style="color: #62be8f; font-size: 13px; margin-right: 12px; font-weight:600; text-decoration:none;">Live Demo →</a>` : ''}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" style="color: #de5669; font-size: 13px; font-weight:600; text-decoration:none;">Source Code →</a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    ${data.experiences.length > 0 ? `
    <div class="section-title" style="margin-top: 3rem;">Experience</div>
    <div class="glass-card" style="padding: 1.5rem;">
      ${data.experiences.map(exp => `
        <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-weight: 700; font-size: 1.1rem; color: #fff;">${exp.role} <span style="color: #62be8f;">@ ${exp.company}</span></div>
            <div style="font-size: 12px; color: #718096;">${exp.startDate} — ${exp.current ? 'Present' : exp.endDate}</div>
          </div>
          <div style="font-size: 12px; color: #de5669; margin-bottom: 0.5rem;">${exp.location}</div>
          <ul style="padding-left: 1.2rem; font-size: 0.9rem; color: #cbd5e0;">
            ${exp.highlights.map(h => `<li style="margin-bottom: 0.25rem;">${h}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    ` : ''}

    ${data.skillGroups.length > 0 ? `
    <div class="section-title" style="margin-top: 3rem;">Skills & Competencies</div>
    <div class="grid">
      ${data.skillGroups.map(sg => `
        <div class="item-card">
          <div class="item-title" style="font-size: 1rem; color: #62be8f;">${sg.category}</div>
          <div style="margin-top: 0.75rem;">
            ${sg.skills.map(s => `<span class="tag" style="background: rgba(35, 101, 69, 0.2); border: 1px solid rgba(64, 158, 111, 0.2); color: #c5ecd6;">${s}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    <div class="footer">
      Generated with FolioForge • Minimalist Glassmorphic Architecture
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${(p.fullName || 'portfolio').toLowerCase().replace(/\s+/g, '-')}-website.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
