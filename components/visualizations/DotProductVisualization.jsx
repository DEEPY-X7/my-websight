'use client';

import { useMemo, useState } from 'react';

export default function DotProductVisualization() {
  const [a1, setA1] = useState(2);
  const [a2, setA2] = useState(1);
  const [b1, setB1] = useState(1);
  const [b2, setB2] = useState(3);
  const dot = useMemo(() => a1 * b1 + a2 * b2, [a1, a2, b1, b2]);

  return (
    <div className="surface-card p-4">
      <h3 className="font-semibold">Dot Product Visualization</h3>
      <p className="text-sm text-slate-400 mt-2">a·b = ({a1},{a2}) · ({b1},{b2}) = <span className="text-sky-300">{dot}</span></p>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <label>a1 <input type="range" min="-5" max="5" value={a1} onChange={(e) => setA1(Number(e.target.value))} className="w-full" /></label>
        <label>a2 <input type="range" min="-5" max="5" value={a2} onChange={(e) => setA2(Number(e.target.value))} className="w-full" /></label>
        <label>b1 <input type="range" min="-5" max="5" value={b1} onChange={(e) => setB1(Number(e.target.value))} className="w-full" /></label>
        <label>b2 <input type="range" min="-5" max="5" value={b2} onChange={(e) => setB2(Number(e.target.value))} className="w-full" /></label>
      </div>
    </div>
  );
}
