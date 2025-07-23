import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Sevice from "./pages/Sevice";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MessageSent from "./pages/MessageSent";

// Components
import BlogDetail from "./components/Blog/BlogDetail";
import PortfolioSlugPage from "./components/Portfolio/[slug]";

// Error Handling
import ErrorBoundary from "./error/ErrorBoundary";
import NotFoundPage from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/about"
          element={
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          }
        />
        <Route
          path="/services"
          element={
            <ErrorBoundary>
              <Sevice />
            </ErrorBoundary>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ErrorBoundary>
              <Portfolio />
            </ErrorBoundary>
          }
        />
        <Route
          path="/portfolio/:slug"
          element={
            <ErrorBoundary>
              <PortfolioSlugPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/blog"
          element={
            <ErrorBoundary>
              <Blog />
            </ErrorBoundary>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <ErrorBoundary>
              <BlogDetail />
            </ErrorBoundary>
          }
        />
        <Route
          path="/contact"
          element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          }
        />
        <Route
          path="/message-sent"
          element={
            <ErrorBoundary>
              <MessageSent />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFoundPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
