import React, { useEffect, useState } from 'react';
import PixelSmiley from './PixelSmiley';

export default function SpicesHeroSection() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => (prev + 0.5) % 100);
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Wireframe Chili Peppers - Top Right */}
      
      {/* Top Product Label */}
      <div className="absolute top-28 left-44 flex items-center gap-3 z-30">
        
      </div>

      {/* Main Content Area */}
      <div className="relative pt-52 px-32 pb-20">
        
        {/* Background Large Circle - Bottom Left */}
        <div className="absolute bottom-32 left-20 w-[550px] h-[550px] bg-white/10 rounded-full"></div>
        
        {/* Brand Badge - Extends outside card */}
       

        {/* Main Content Card */}
        <div className="relative bg-[#ececec] rounded-[3rem] overflow-hidden" style={{height: '600px'}}>
          
          {/* Top Right White Circle - More visible animation */}
          <div 
            className="absolute top-20 right-32 w-80 h-80 bg-white rounded-full shadow-lg"
            style={{ 
              transform: `translateY(${Math.sin(position * 0.05) * 40}px)`,
              animation: 'floatUp 6s ease-in-out infinite'
            }}
          ></div>
          
          {/* Bottom Center Large White Circle - More visible animation */}
          <div 
            className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-white/60 rounded-full shadow-lg"
            style={{ 
              transform: `translateY(${Math.sin(position * 0.03) * 60}px)`,
              animation: 'floatUp 8s ease-in-out infinite'
            }}
          ></div>
          
          {/* Additional floating white circle for more visibility */}
          <div 
            className="absolute top-40 left-1/2 w-60 h-60 bg-white/80 rounded-full shadow-lg"
            style={{ 
              transform: `translateY(${Math.sin(position * 0.04) * 50}px)`,
              animation: 'floatUp 7s ease-in-out infinite 1s'
            }}
          ></div>
          
          {/* Main Heading */}
          <div className="relative z-10 pt-32 pl-28">
            <h1 className="text-[#ff6b4a] font-bold leading-[0.88]" style={{fontSize: '9rem', letterSpacing: '-0.025em'}}>
              At the Forefront<br />
              of Food Sobriety
            </h1>
            
            {/* Description */}
            <div className="mt-20 max-w-3xl">
              
              
              {/* Divider */}
              <div className="w-full h-px bg-[#ff6b4a]/30 my-8"></div>
              
              {/* Spices & Herbs Section */}
              
            </div>
          </div>

          {/* Globe Image - Positioned at left edge with most of it outside */}
          <div className="absolute bottom-0  text-black -left-48 w-[600px] h-[600px]" style={{ transform: 'translateY(40%)' }}>
            <img
              src="/Globe-5.png" 
              alt="Wireframe globe placeholder"
              className="w-full h-full object-cover"
              style={{ 
                // No clip path - showing full image
                // Positioned so only right portion is visible inside the card
              }}
            />
          </div>

        </div>

        {/* Product Card - Overlapping on right */}
        <div className="absolute top-80 right-20 bg-white rounded-[2rem] shadow-2xl w-[340px] z-30">
          <div className="p-9">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#ff6b44a]"></div>
                
              </div>
              <p className="text-[#ff6b4a] text-3xl mt-2">Timut Pepper</p>
            </div>
            
            {/* Split Sphere */}
            
          </div>
          
          {/* Bottom right brown circle badge */}
          <div className="absolute bottom-7 right-7 w-12 h-12 bg-[#5d3a1a] rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Bottom Navigation */}
      
      {/* CSS for more pronounced animation */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(-60px);
          }
          75% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
}