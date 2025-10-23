import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Nav from '../Components/Nav.jsx'
import { useGSAP } from '@gsap/react' // It's good practice to use the GSAP hook


const Home = () => {
 const firstLine = "Communication for the Soul,";
  const [isReady, setIsReady] = useState(false);
 const [coloredLetters, setColoredLetters] = useState(new Set([firstLine.indexOf(',')]));
 const [activeLetters, setActiveLetters] = useState(new Set());
  const gunRef = useRef(null);
 const ballRef = useRef(null);
 const firstLineRef = useRef(null);
 const containerRef = useRef(null); // Ref for the main container


 const allCharacters = firstLine.split('');
  const letterIndices = allCharacters
   .map((char, index) => ({ char, index, isSpace: char === ' ' }))
   .filter(item => !item.isSpace)
   .map(item => item.index);


 const soulStartIndex = firstLine.indexOf('Soul');
 const soulIndices = Array.from({ length: 4 }, (_, i) => soulStartIndex + i);
 const permanentBlueIndices = new Set([...soulIndices, firstLine.indexOf(',')]);


 useGSAP(() => {
   // Wait for all fonts on the page to be fully loaded
   document.fonts.ready.then(() => {
    
     const alignAndAnimate = () => {
       if (!gunRef.current || !ballRef.current || !firstLineRef.current) return;


       // 1. MEASURE: Get the final, correct position of the text
       const textRect = firstLineRef.current.getBoundingClientRect();
       const containerRect = containerRef.current.getBoundingClientRect();
       const textCenterY = textRect.top - containerRect.top + textRect.height / 2;
      
       // 2. ALIGN: Instantly set the gun and ball to the correct vertical position
       gsap.set([gunRef.current, ballRef.current], { top: textCenterY });
      
       // 3. REVEAL: Make the component visible now that everything is perfectly aligned
       setIsReady(true);
      
       // 4. ANIMATE: Create and run the timeline now that setup is complete
       const tl = gsap.timeline();
      
       tl.fromTo(gunRef.current,
         { x: -200, opacity: 0 },
         { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
       );


       tl.to(ballRef.current, {
         x: 197,
         duration: 0.8,
         ease: "power2.out",
         opacity: 1,
         onComplete: () => {
           startWaveColoring();
           gsap.to(ballRef.current, { opacity: 0, duration: 0.2 });
         }
       }, "+=0.5");


       tl.to(gunRef.current, {
         x: -200,
         opacity: 0,
         duration: 1.5,
         ease: "power2.in",
         delay: 2
       });
     };


     // THE KEY FIX: Wait a tiny moment (one frame) after fonts are ready
     // to allow the browser to paint the text before we measure it.
     gsap.delayedCall(0.016, alignAndAnimate);
   });


 }, []); // Empty dependency array ensures this runs only once


 const startWaveColoring = () => {
   const windowSize = 4;
   let currentPosition = 0;
   const newColoredLetters = new Set([firstLine.indexOf(',')]);
  
   const colorInterval = setInterval(() => {
     if (currentPosition < letterIndices.length) {
       const newActiveLetters = new Set();
       for (let i = currentPosition; i < Math.min(currentPosition + windowSize, letterIndices.length); i++) {
         const index = letterIndices[i];
         newActiveLetters.add(index);
         if (permanentBlueIndices.has(index)) {
           newColoredLetters.add(index);
         }
       }
       setActiveLetters(newActiveLetters);
       setColoredLetters(new Set(newColoredLetters));
       currentPosition++;
     } else {
       clearInterval(colorInterval);
       const finalColoredLetters = new Set([...soulIndices, firstLine.indexOf(',')]);
       setColoredLetters(finalColoredLetters);
       setActiveLetters(new Set());
     }
   }, 180);
 };


 const shouldColorCharacter = (charIndex) => {
   return coloredLetters.has(charIndex) || activeLetters.has(charIndex);
 };


 return (
   <div ref={containerRef} className={`fixed inset-0 bg-white w-full overflow-hidden ${isReady ? 'visible' : 'invisible'}`}>
     <Nav />
     <div className='w-full h-screen flex items-center justify-center relative'>
       <img
         ref={gunRef}
         src="/gun.png"
         alt="IEEEPCS Logo"
         className="w-40 h-auto absolute z-30"
         style={{ left: '0px', transform: 'translateY(-50%)' }}
       />
       <div
         ref={ballRef}
         className="absolute w-3 h-3 bg-blue-400 rounded-full z-20"
         style={{ left: '40px', transform: 'translateY(-50%)', opacity: 0 }}
       />
       <div className='w-full px-8 md:px-16 lg:px-32 relative z-10'>
         <h1 ref={firstLineRef} className='text-8xl font-bold text-black text-center leading-tight mb-4'>
           {allCharacters.map((char, index) => (
             <span
               key={`first-${index}`}
               className={`inline-block transition-colors duration-200 ${shouldColorCharacter(index) ? 'text-blue-400' : 'text-black'} ${char === ' ' ? 'w-4' : ''} ${char === ',' ? 'ml-0' : ''}`}
             >
               {char}
             </span>
           ))}
         </h1>
         <h1 className='text-8xl font-bold text-black text-center leading-tight'>
           Innovation for the <span className="text-blue-400">Mind.</span>
         </h1>
       </div>
     </div>
   </div>
 )
}


export default Home;
