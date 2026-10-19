import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root='dist';
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const base='/works/orion-results/';
assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
for (const phrase of ['Keep the result.','Bound the view.','RECORDED SYNTHETIC WALKTHROUGH','115,000 bytes','171 bytes','One cooperative writer','CPython 3.11.9']) assert.ok(html.includes(phrase),phrase);
assert.ok(html.includes('rel="canonical" href="https://www.danmercede.com/works/orion-results/"'));
assert.ok(html.includes('https://github.com/OrionArchitekton/orion-results'));
assert.ok(html.includes('/guides/capture-agent-results-with-byte-bounded-snapshots'));
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
 const value=match[1];
 if(value.startsWith('#')||value.startsWith('http')) continue;
 assert.ok(value.startsWith(base),value);
 assert.ok(fs.existsSync(path.join(root,value.slice(base.length))),value);
}
const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.ok(schema['@graph'].every(x=>!x.url||!x.url.includes('orion-handoff')));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'site.webmanifest'),'utf8'));
assert.equal(manifest.start_url,base);
for(const icon of manifest.icons){assert.ok(icon.src.startsWith(base));assert.ok(fs.existsSync(path.join(root,icon.src.slice(base.length))));}
const image=fs.readFileSync(path.join(root,'og-card.png'));
assert.equal(image.readUInt32BE(16),1200);assert.equal(image.readUInt32BE(20),630);
assert.ok(!fs.existsSync(path.join(root,'robots.txt'))&&!fs.existsSync(path.join(root,'sitemap.xml')));
assert.ok(!fs.existsSync('.vercel'));
console.log(JSON.stringify({initial_html:true,prefix_assets:true,canonical:true,manifest:true,og:[1200,630],site_robots:false}));
