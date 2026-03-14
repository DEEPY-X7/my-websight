import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const MessageSent = lazy(() => import("./pages/MessageSent"));
const Research = lazy(() => import("./pages/Research"));
const BlogDetail = lazy(() => import("./components/Blog/BlogDetail"));
const PortfolioSlugPage = lazy(() => import("./components/Portfolio/[slug]"));
const NotFoundPage = lazy(() => import("./NotFound/NotFound"));

import ErrorBoundary from "./error/ErrorBoundary";

function PageLoader() {
  return <div className="min-h-screen grid place-items-center text-slate-300 bg-[#0F172A]">Loading...</div>;
}

function RouteElement({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteElement><Home /></RouteElement>} />
        <Route path="/about" element={<RouteElement><About /></RouteElement>} />
        <Route path="/research" element={<RouteElement><Research /></RouteElement>} />
        <Route path="/projects" element={<RouteElement><Portfolio /></RouteElement>} />
        <Route path="/projects/:slug" element={<RouteElement><PortfolioSlugPage /></RouteElement>} />
        <Route path="/blog" element={<RouteElement><Blog /></RouteElement>} />
        <Route path="/blog/:slug" element={<RouteElement><BlogDetail /></RouteElement>} />
        <Route path="/contact" element={<RouteElement><Contact /></RouteElement>} />
        <Route path="/message-sent" element={<RouteElement><MessageSent /></RouteElement>} />

        <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
        <Route path="/portfolio/:slug" element={<Navigate to="/projects" replace />} />
        <Route path="/services" element={<Navigate to="/research" replace />} />

        <Route path="*" element={<RouteElement><NotFoundPage /></RouteElement>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
