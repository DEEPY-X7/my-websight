'use client';

import { useState } from 'react';

export default function DecisionBoundaryVisualization() {
  const [bias, setBias] = useState(0);
  return (
    <div className="surface-card p-4">
      <h3 className="font-semibold">Decision Boundary Visualization</h3>
      <p className="text-sm text-slate-400 mt-2">Boundary: x1 + x2 + b = 0, with b = {bias.toFixed(1)}</p>
      <div className="mt-3 rounded-lg bg-slate-900 p-4 text-xs text-slate-300">
        <p>Points above line are class A, below line are class B.</p>
        <p className="text-sky-300 mt-1">Move bias slider to see how classification shifts.</p>
      </div>
      <label className="block mt-3 text-xs">Bias
        <input type="range" min="-5" max="5" step="0.1" value={bias} onChange={(e) => setBias(Number(e.target.value))} className="w-full" />
      </label>
    </div>
  );
}
