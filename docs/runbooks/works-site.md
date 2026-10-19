---
verified: 2026-10-19
review_after: 2026-11-18
topics: [works-site, result-capture]
references: [../../vite.config.ts, ../../App.tsx, ../../constants.ts, ../../vercel.json, ../../specs/orion-results-product-page-spec.md]
---

# Result-capture Works page

Current state: public source under protected review; the new external project is prepared without a production deployment. Build/typecheck, initial HTML/asset checks and local desktop/mobile browser inspection establish only the selected local build. Source/package/guide/site are separate acceptance paths.

The approved orion-results-site project has been prepared. Use only that named project after the final source/artifact review gates. Never copy a .vercel directory or project ID from another source. Verify project identity and public unauthenticated origin before the hub route is enabled. No DNS or subdomain is required.

The hub needs a no-slash redirect, explicit bare /works/orion-results/ rewrite and prefix-stripped /works/orion-results/:path* rewrite to the new external origin. Keep these before the SPA catch-all. The origin serves dist at root; /assets cache headers are origin-relative. The hub owns robots/sitemap. Never add a physical hub ROUTE_META page for this microsite.

Publish and verify the source package before the guide. Deploy the new site origin for preflight before enabling the hub proxy; accept its guide link only once the combined Works/guide hub release is verified. The staged source URLs/guide URL are not live acceptance.

Origin preflight is an upstream-file check. Request the origin root HTML without authentication and verify its title and canonical Works URL. For each built reference beginning `/works/orion-results/`, remove that prefix and request the resulting root path on the origin: for example, the canonical page's `/works/orion-results/assets/<hash>.js` maps to the origin's `/assets/<hash>.js`. Check JavaScript, CSS, manifest and image content types and hashes. A catch-all HTML 200 cannot pass an asset check.

The standalone origin does not expose a second browser-facing copy at the prefixed path. Opening its root in a browser would resolve the canonical-prefix assets on that origin, where those paths are not provided. No direct-origin browser-render acceptance is claimed. Run the complete browser/navigation, copy, mobile, no-script and guide checks at the canonical Works URL after the hub proxy is enabled. Keep that distinction when recording origin preflight versus canonical consumer evidence; the hub owns prefix stripping.

No timer or monitoring service is added. Rollback uses normal protected revert PRs for the hub entry/rewrites/sitemap and a same-project known-good redeployment. Do not alter the core library, original helper or other Works routes. Stop if the planned origin/project identity differs.

The owning hub change is https://github.com/OrionArchitekton/danmercede.com/pull/214 . It carries the redirect, two prefix-stripped rewrites, guide and sitemap together; do not duplicate hub routing in this site repo. The author-observed local desktop/mobile, script-disabled, keyboard/copy and reduced-motion receipt is `docs/releases/site-review-0.1.0.json`. These local checks do not establish production availability.
