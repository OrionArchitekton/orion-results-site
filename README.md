# orion-results product site

MIT source for the orion-results Works page. The source repository is public; production deployment and guide publication have their own release checks.

The page follows the existing navy/copper Works style. It renders the same React component into initial HTML at build time and hydrates that component in the browser. Product data remains in constants.ts; the library and guide own operational documentation.

Checks: `npm ci`, `npm run typecheck`, `npm test`, `npm audit`. Local rendering also checks desktop/mobile layouts, copy feedback and prefix-stripped assets. Proposed canonical: https://www.danmercede.com/works/orion-results/.

See docs/runbooks/works-site.md for the later deployment sequence, independent production evidence and rollback. No DNS/subdomain, credentials, service or estate-runtime change is included.
