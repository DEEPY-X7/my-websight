'use client';

import { useMemo, useState } from 'react';

export default function GradientDescentVisualization() {
  const [x, setX] = useState(8);
  const [lr, setLr] = useState(0.1);
  const nextX = useMemo(() => x - lr * (2 * x), [x, lr]);

  return (
    <div className="surface-card p-4">
      <h3 className="font-semibold">Gradient Descent (f(x)=x²)</h3>
      <p className="text-sm text-slate-400 mt-2">Current x: {x.toFixed(2)} | Next x: <span className="text-sky-300">{nextX.toFixed(2)}</span></p>
      <p className="text-xs text-slate-500 mt-1">Update: x = x - lr * 2x</p>
      <div className="mt-3 text-xs space-y-2">
        <label className="block">x <input type="range" min="-10" max="10" step="0.5" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" /></label>
        <label className="block">learning rate <input type="range" min="0.01" max="0.5" step="0.01" value={lr} onChange={(e) => setLr(Number(e.target.value))} className="w-full" /></label>
      </div>
    </div>
  );
}
