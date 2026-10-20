import { ProductDemo } from './ProductDemo';
import { useState } from 'react';
import { PRODUCT_DATA as p } from './constants';

function Install() {
  const [status, setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(p.install); setStatus('Command copied.'); }
    catch { setStatus('Copy unavailable. Select the command text.'); }
  }
  return <div>
    <div className="flex justify-between items-center gap-4 mb-3"><h3 className="font-medium">Install the verified wheel</h3><button className="border border-neutral-300 rounded px-3 py-1 text-xs font-mono hover:border-copper-dark" onClick={copy}>Copy command</button></div>
    <pre className="bg-neutral-900 text-neutral-100 p-5 rounded overflow-x-auto text-xs leading-6"><code>{p.install}</code></pre>
    <p role="status" aria-live="polite" className="text-xs text-neutral-600 mt-2 min-h-5">{status}</p>
  </div>;
}
const Title = ({ number, children }: {number: string; children: string}) => <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 border-b border-neutral-200 pb-3 mb-5"><span className="text-copper-dark" aria-hidden="true">{number} // </span>{children}</h2>;
export default function App() {
  return <>
    <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white p-2" href="#main-content">Skip to main content</a>
    <main id="main-content" tabIndex={-1} className="max-w-3xl mx-auto px-6 py-10 md:py-16 text-neutral-900">
      <nav aria-label="Product navigation" className="mb-12 flex justify-between text-xs font-mono text-neutral-600"><a href="https://www.danmercede.com/works" className="hover:text-copper-deep">DAN MERCEDE / WORKS</a><span>PYTHON · MIT · v0.1.0</span></nav>
      <header>
        <p className="font-mono text-sm text-copper-deep mb-4">{p.name}</p>
        <h1 className="font-mono text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-5">Keep the result.<br/>Bound the view.</h1>
        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">Store complete text privately. Pass a byte-bounded snapshot. Recover the exact result when you need it.</p>
        <div className="flex flex-wrap gap-5 items-center mt-7"><a href="#quickstart" className="bg-copper-dark hover:bg-copper-deep text-white px-5 py-3 rounded text-sm font-medium">Start with a local capture</a><a href={p.github} className="text-sm underline underline-offset-4 hover:text-copper-deep">View on GitHub</a></div>
      </header>
      <ProductDemo />
      <section aria-labelledby="workflow-title" className="my-12 md:my-16">
        <h2 id="workflow-title" className="sr-only">Capture, select, recover</h2>
        <ol className="grid grid-cols-3 gap-3 border-y border-neutral-200 py-5 text-xs md:text-sm"><li><span className="font-mono text-copper-deep">01 / </span>Capture full text</li><li><span className="font-mono text-copper-deep">02 / </span>Select one view</li><li><span className="font-mono text-copper-deep">03 / </span>Read by reference</li></ol>
        <p className="mt-7 text-xs font-mono text-neutral-600">RECORDED SYNTHETIC WALKTHROUGH</p>
        <div className="mt-3 bg-neutral-900 text-neutral-100 rounded p-5 md:p-7 font-mono text-sm leading-7">
          <p><span className="text-neutral-400">captured text</span><span className="float-right">115,000 bytes</span></p>
          <p><span className="text-neutral-400">selected snapshot</span><span className="float-right text-copper-light">171 bytes</span></p>
          <p className="border-t border-neutral-700 pt-3 mt-3 text-neutral-300">2 unique results · 1 omitted from this view</p>
          <p className="text-neutral-300">Exact read-back and backup recovery verified.</p>
        </div>
        <p className="text-xs text-neutral-600 mt-3 leading-5">One observed example, not a compression ratio or a promise for every input. Omitted results remain recoverable by reference.</p>
      </section>
      <section className="mb-12">
        <Title number="01">A small view with a dependable original</Title>
        <p className="leading-7 text-neutral-700">A short return value helps only when the original result is still available. Capture commits complete text and its membership counters together in SQLite, then verifies them through a separate read-only connection before returning success.</p>
        <p className="leading-7 text-neutral-700 mt-4">Default snapshots contain references and counts without payload text, caller labels or storage paths. Explicit inline selection permits complete small values as escaped JSON. Missing, unsafe, corrupt and unknown state never becomes successful emptiness.</p>
      </section>
      <section id="quickstart" className="mb-12">
        <Title number="02">Start with a disposable session</Title>
        <p className="leading-7 text-neutral-700 mb-6">Download the v0.1.0 wheel and verify its release checksum. Choose an absolute private root on local storage. The guide supplies a complete synthetic walkthrough.</p>
        <Install/>
        <pre className="bg-neutral-100 p-5 rounded overflow-x-auto text-xs leading-6 mt-3"><code>{`with Session.create(root) as session:\n    receipt = session.capture("result", text)\n    view = session.snapshot(budget_bytes=256)\n    original = read(root, receipt.reference)`}</code></pre>
        <p className="text-xs text-neutral-600 mt-3">API excerpt. The <a className="underline underline-offset-4 hover:text-copper-deep" href={p.guide}>self-contained guide</a> includes imports, private-root selection, verification and cleanup.</p>
      </section>
      <section className="mb-12">
        <Title number="03">Keep the boundary clear</Title>
        <dl className="space-y-6 text-sm leading-6">
          <div><dt className="font-medium">The complete snapshot string is measured.</dt><dd className="text-neutral-700">Every UTF-8 byte counts, including references and omission information. Replace your selected view each time. Previous strings, input memory, wrappers, tokens and a model's whole context are outside this limit.</dd></div>
          <div><dt className="font-medium">Uncertainty stays visible.</dt><dd className="text-neutral-700">A failed commit or unconfirmed rollback/read-back leaves an unknown outcome and faults the handle. Keep the expected reference and original text, then close, inspect and recover deliberately.</dd></div>
          <div><dt className="font-medium">Local storage stays explicit.</dt><dd className="text-neutral-700">One cooperative writer per private session. Call the APIs serially within each process. Overlapping calls refuse with storage_busy. No pip runtime dependencies, service, automatic harness hook, migration or deletion API. References carry identity, not authority, redaction or encryption.</dd></div>
        </dl>
        <p className="border-t border-neutral-200 mt-7 pt-5 text-xs text-neutral-600 leading-6">Demonstrated on CPython 3.11.9, SQLite 3.45.1, Linux x86_64 under WSL2 and local ext4. Other platforms and hardware power loss are unverified. Native agent adapters and starter integration are separate work.</p>
      </section>
      <footer className="border-t border-neutral-200 pt-7 text-sm"><div className="flex flex-wrap gap-6"><a className="underline underline-offset-4 hover:text-copper-deep" href={p.guide}>Follow the guide</a><a className="underline underline-offset-4 hover:text-copper-deep" href={p.github}>Source and recovery runbook</a></div><p className="text-xs text-neutral-600 mt-6">MIT licensed. Built by Dan Mercede.</p></footer>
    </main>
  </>;
}
