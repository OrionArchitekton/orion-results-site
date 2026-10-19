# Result-capture product site

MIT product site. Publish only reviewed source after required CI and qualified human review. Credential changes and estate runtime adoption need separate approval.
Follow the existing Works navy/copper, Inter/mono visual system. The canonical path is /works/orion-results/.
Checks: npm ci; npm run typecheck; npm test; npm audit; local desktop/mobile browser and no-JS render check.
Build-time rendering and hydration use the same App; preserve deterministic server markup.
Private raw evidence is excluded in .private. Do not copy .vercel, histories or node_modules from another project.
