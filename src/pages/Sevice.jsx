// src/pages/Sevice.jsx

import React from 'react';
import Services from '../components/services/Services';
import Navbar from '../components/Home/Navbar';
import FooterCTA from '../components/Home/FooterCTA';

import ErrorBoundary from '../error/ErrorBoundary'; // ✅ Import ErrorBoundary

function Sevice() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <Services />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterCTA />
      </ErrorBoundary>
    </>
  );
}

export default Sevice;
