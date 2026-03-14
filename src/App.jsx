import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MessageSent from "./pages/MessageSent";
import Research from "./pages/Research";

import BlogDetail from "./components/Blog/BlogDetail";
import PortfolioSlugPage from "./components/Portfolio/[slug]";

import ErrorBoundary from "./error/ErrorBoundary";
import NotFoundPage from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
        <Route path="/research" element={<ErrorBoundary><Research /></ErrorBoundary>} />
        <Route path="/projects" element={<ErrorBoundary><Portfolio /></ErrorBoundary>} />
        <Route path="/projects/:slug" element={<ErrorBoundary><PortfolioSlugPage /></ErrorBoundary>} />
        <Route path="/blog" element={<ErrorBoundary><Blog /></ErrorBoundary>} />
        <Route path="/blog/:slug" element={<ErrorBoundary><BlogDetail /></ErrorBoundary>} />
        <Route path="/contact" element={<ErrorBoundary><Contact /></ErrorBoundary>} />
        <Route path="/message-sent" element={<ErrorBoundary><MessageSent /></ErrorBoundary>} />

        {/* Backward-compatible redirects */}
        <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
        <Route path="/portfolio/:slug" element={<Navigate to="/projects" replace />} />
        <Route path="/services" element={<Navigate to="/research" replace />} />

        <Route path="*" element={<ErrorBoundary><NotFoundPage /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
