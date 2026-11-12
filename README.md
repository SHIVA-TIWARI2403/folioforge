# FolioForge

A dual-mode web application for designing interactive developer portfolios and exporting ATS-friendly resumes in real-time.

---

## Overview

FolioForge lets users enter profile data once and switch seamlessly between two representations:
1. **Interactive Web Portfolio:** A responsive, modern single-page portfolio highlighting projects, experience timeline, tech skills, and contact links.
2. **Clean A4 Resume:** A structured, print-optimized resume styled with `@media print` rules for clean PDF exports with zero browser margins or UI clutter.

---

## Features

- **Live Split-Screen Preview:** See changes reflect immediately across both portfolio view and resume layout.
- **Client-Side Export:** Export to clean PDF via native print dialog or download a self-contained portable HTML file.
- **Local Persistence:** Automatically syncs form state with browser `localStorage`, with support for JSON export/import backups.
- **Glassmorphic Aesthetic:** Styled with Tailwind CSS, backdrop filters, and subtle emerald/maroon accent palettes.

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Lucide React

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build
```
