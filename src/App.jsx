import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './MyComponents/loader/Loader';
import CustomCursor from './MyComponents/cursor/CustomCursor';
import { preloadCriticalImages } from './lib/imageOptimizer';
import Home from './pages/Home';

// List of critical images to preload
const CRITICAL_IMAGES = [
  '/src/assets/Aayush-Avatar.png',
  '/src/assets/avatar.png'
];

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add mounted state for client-side animation
    setMounted(true);
    
    // Preload critical images
    preloadCriticalImages(CRITICAL_IMAGES);
    
    // Add custom cursor active class to body
    document.body.classList.add('custom-cursor-active');
    
    // Use requestIdleCallback for non-critical initialization
    const idleCallback = 
      window.requestIdleCallback || 
      ((cb) => setTimeout(cb, 1));
    
    // Start loading immediately but give a minimum perceived loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Reduced loading time for better UX

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Prevent layout shift by waiting for mount
  if (!mounted) return null;

  return (
    <>
      {/* Custom cursor component (only rendered on client-side) */}
      {mounted && <CustomCursor />}
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent"
          >
            <Toaster 
              position="top-right"
              reverseOrder={false} 
              toastOptions={{
                duration: 5000,
                style: {
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500
                },
              }}
            />
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;