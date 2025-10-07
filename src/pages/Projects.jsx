import React, { useEffect, useState } from 'react';
import Header from '../MyComponents/Navigation/Header';
import ProjectsSectionPage from '../MyComponents/Projects/ProjectsSectionPage';
import Footer from '../MyComponents/Footer/Footer';
import Loader from '../MyComponents/loader/Loader';
import { AnimatedShapesBackground } from '../components/ui/animated-shapes-background';
import { FlowingGradient } from '../components/ui/flowing-gradient';
import { GridAnimation } from '../components/ui/grid-animation';

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Base animated background with improved visibility */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <FlowingGradient
          colorScheme="purple" 
          intensity="medium" // Changed from low to medium
          blur="medium" // Changed from high to medium
          className="opacity-40" // Increased from 20% to 40%
        />
      </div>
      
      {/* Subtle grid pattern with improved visibility */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <GridAnimation 
          variant="random"
          cellSize={40} 
          opacity={0.06} // Increased from 0.03 to 0.06
          color="#000000"
          animationSpeed={15} // Slightly faster
          className="opacity-90" // Increased opacity
        />
      </div>
      
      {/* Additional animated shapes with improved visibility */}
      <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
        <AnimatedShapesBackground 
          variant="geometric" 
          intensity="medium" // Changed from low to medium
          baseColor="#8b5cf6"
          accentColor="#6366f1"
          tertiaryColor="#ec4899"
          className="opacity-35" // Increased visibility
        />
      </div>
      
      <Header isMobile={isMobile} />
      
      <main className="pt-20">
        <div className="relative">
          {/* Header section with special background */}
          <div className="relative py-20 mb-10">
            <div className="absolute inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
              <AnimatedShapesBackground 
                variant="blob" 
                intensity="high" // Increased from medium to high
                baseColor="#8b5cf6"
                accentColor="#6366f1"
                tertiaryColor="#ec4899"
                className="opacity-45" // Increased from 25% to 45%
              />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                My Projects
              </h1>
              <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg">
                Explore my portfolio of work across web development, design, and engineering.
                Each project represents a unique problem solved and skills applied.
              </p>
            </div>
          </div>
          
          {/* Projects grid with its own subtle background */}
          <div className="relative">
            <ProjectsSectionPage />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}