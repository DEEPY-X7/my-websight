'use client';

import { useMemo, useState } from 'react';

export default function Visualizations() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [lr, setLr] = useState(0.1);
  const dot = a * b;
  const gradStep = (10 - lr * 3).toFixed(2);

  const boundary = useMemo(() => {
    const points = [];
    for (let x = -3; x <= 3; x += 1) {
      points.push({ x, y: Number((0.8 * x + 0.5).toFixed(1)) });
    }
    return points;
  }, []);

  return (
    <section className="section-wrap py-12">
      <h2 className="font-heading text-2xl">Math Visualizations</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="surface-card p-5">
          <h3 className="font-heading text-lg">Vector & Dot Product</h3>
          <label className="mt-3 block text-sm text-muted">Vector A magnitude: {a}</label>
          <input type="range" min="1" max="10" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full" />
          <label className="mt-3 block text-sm text-muted">Vector B magnitude: {b}</label>
          <input type="range" min="1" max="10" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full" />
          <p className="mt-3 text-accent">Dot Product = {dot}</p>
        </div>

        <div className="surface-card p-5">
          <h3 className="font-heading text-lg">Gradient Descent Step</h3>
          <label className="mt-3 block text-sm text-muted">Learning rate: {lr}</label>
          <input type="range" min="0.01" max="1" step="0.01" value={lr} onChange={(e) => setLr(Number(e.target.value))} className="w-full" />
          <p className="mt-3 text-accent">New parameter value (w - lr*grad): {gradStep}</p>
        </div>

        <div className="surface-card p-5 lg:col-span-2">
          <h3 className="font-heading text-lg">Decision Boundary (linear)</h3>
          <p className="mt-2 text-sm text-muted">Boundary points for y = 0.8x + 0.5:</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm md:grid-cols-7">
            {boundary.map((p) => (
              <div key={p.x} className="rounded bg-slate-900/70 p-2 text-center">({p.x}, {p.y})</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
