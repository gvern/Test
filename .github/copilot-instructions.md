# Project Guidelines

## Project Scope
- This repository hosts a personal portfolio/CV website for Gustave (Data Scientist & AI/ML Engineer).
- Keep the implementation simple: static files only (HTML, CSS, JavaScript), no build step.

## Source Of Truth
- Use `README.md` for product goals, sections, and deployment intent.
- Use `cv_extrait.md` for profile content (experience, education, skills, links).
- Do not duplicate long documentation in generated files; link back to these docs.

## Architecture
- Main entrypoint: `index.html` at repository root.
- Styling: `style.css` at repository root.
- Behavior: `script.js` at repository root.
- Static resources: `assets/`.

## Coding Conventions
- Prefer semantic HTML and accessible markup (`aria-label`, heading hierarchy, keyboard-friendly links/buttons).
- Keep JavaScript framework-free and progressively enhanced.
- Keep CSS organized with design tokens in `:root` and clear section comments.
- Preserve French copy tone unless explicitly asked to translate.

## Build And Test
- No package manager, no build pipeline, no test runner.
- Validate changes by opening `index.html` in a browser and checking console errors.

## Deployment Notes
- Target deployment is GitHub Pages from root content.
- Keep relative paths compatible with static hosting.
