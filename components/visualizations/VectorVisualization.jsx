'use client';

import { useMemo, useState } from 'react';

export default function VectorVisualization() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(2);
  const magnitude = useMemo(() => Math.sqrt(x * x + y * y).toFixed(2), [x, y]);

  return (
    <div className="surface-card p-4">
      <h3 className="font-semibold">Vector Visualization</h3>
      <svg viewBox="0 0 220 160" className="w-full h-44 mt-3 bg-slate-900 rounded-lg">
        <line x1="20" y1="140" x2="200" y2="140" stroke="#334155" />
        <line x1="20" y1="20" x2="20" y2="140" stroke="#334155" />
        <line x1="20" y1="140" x2={20 + x * 20} y2={140 - y * 20} stroke="#38BDF8" strokeWidth="3" />
      </svg>
      <p className="text-sm text-slate-400 mt-3">Vector: ({x}, {y}) | Magnitude: {magnitude}</p>
      <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
        <label>X <input type="range" min="0" max="8" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" /></label>
        <label>Y <input type="range" min="0" max="8" value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full" /></label>
      </div>
    </div>
  );
}
