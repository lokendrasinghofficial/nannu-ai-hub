import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollLine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / documentHeight, 1);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      {/* Background Line */}
      <div className="relative w-0.5 h-96 bg-border/30 rounded-full overflow-hidden">
        {/* Animated Progress Line */}
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out shadow-lg"
          style={{ 
            height: `${scrollProgress * 100}%`,
            boxShadow: `0 0 20px hsl(var(--primary) / 0.5)`
          }}
        />
        
        {/* Glowing Dot at Progress Point */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg transition-all duration-300 ease-out"
          style={{ 
            top: `${scrollProgress * 100}%`,
            transform: 'translateX(-50%) translateY(-50%)',
            boxShadow: `0 0 15px hsl(var(--primary) / 0.8)`
          }}
        />
        
        {/* Pulse Effect */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"
          style={{ 
            top: `${scrollProgress * 100}%`,
            transform: 'translateX(-50%) translateY(-50%)'
          }}
        />
      </div>
      
      {/* Side Decorative Elements */}
      <div className="absolute -left-8 top-0 w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30 opacity-50"></div>
      <div className="absolute -left-8 bottom-0 w-8 h-0.5 bg-gradient-to-r from-transparent to-accent/30 opacity-50"></div>
      
      {/* Floating Particles */}
      <div className="absolute -left-4 top-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute -left-6 top-1/2 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -left-4 top-3/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Progress Percentage Label */}
      <div 
        className="absolute -left-16 text-xs font-bold text-primary bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1 transition-all duration-300"
        style={{ 
          top: `${scrollProgress * 100}%`,
          transform: 'translateY(-50%)'
        }}
      >
        {Math.round(scrollProgress * 100)}%
      </div>
    </div>
    
    {/* Scroll to Top Button */}
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-primary text-white rounded-full shadow-neon flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
    </>
  );
}