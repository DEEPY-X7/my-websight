// main.jsx ya index.js me
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import ErrorBoundary from './error/ErrorBoundary'; // ✅ Import it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary> {/* ✅ Global wrapper */}
      <App />
    </ErrorBoundary>
  </StrictMode>
);
