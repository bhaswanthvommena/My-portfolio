# CLAUDE.md

## Development Commands
* Run Dev Server: `npm run dev`
* Build Production Bundle: `npm run build`
* Run Linter: `npm run lint`
* TypeScript Compiler Check: `npx tsc --noEmit`

## Project Rules & Architecture
* **Stack**: Next.js 16.2.4 (App Router) + React 19.2.4 + Tailwind/Vanilla CSS + Three.js / R3F (`Background3D`)
* **Styling**: Prefer CSS modules (`*.module.css`) for localized component styling and standard variables defined in `src/app/globals.css`.
* **Component Structure**:
  * Functional React components using TypeScript (`.tsx`).
  * Always use `"use client"` directive on client-rendered components (especially anything using React hooks or `@react-three/fiber`).
* **Imports**:
  * Use path aliases: `@/components/*`, `@/app/*`.
* **Next.js Rules**: Heed the rules in [AGENTS.md](file:///c:/Users/vbhas/Downloads/WEBSITES/My%20portfolio%20website/AGENTS.md).
