"use client";

import React from 'react';
import Terminal from '@/components/Terminal/Terminal';
import { AboutSection, ServicesSection, ProjectsSection, ContactSection } from '@/components/Sections/Sections';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero section with terminal */}
      <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[#030303]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#00FF00,#00CA4E,#007F25)] opacity-[0.03] bg-[length:400%_400%] animate-gradient-flow" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,0,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,202,78,0.15),transparent_50%)]" />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-1" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="glitch-container relative mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-center text-white opacity-90 tracking-tight">
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] via-[#00CA4E] to-[#00FF00]">
                  Susko
                </span>
                <span className="absolute inset-0 animate-pulse bg-[#00FF00]/20 blur-xl" />
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-center mb-12 text-gray-400 font-light tracking-wide">
            Type <span className="font-mono text-[#00FF00] font-normal">help</span> to begin your journey
          </p>

          <div className="">
            <Terminal />
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />
      </main>

      {/* Content sections */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;