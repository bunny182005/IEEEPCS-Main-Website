import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import EyewearMarquee from '../Components/EyewearMarquee.jsx';
import MaterialsSection from '../Components/MaterialsSection.jsx';
import RethinkingSection from '../Components/RethinkingSection.jsx';
import LetsTalk from '../Components/LetsTalk.jsx';
import Crazy from '../Components/Crazy.jsx';
import SpicesHeroSection from '../Components/SpicesHeroSection.jsx';

// Scroll Animation Trigger (unchanged)
const TriggerOnScroll = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all ease-out duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// TimelineItem component (unchanged)
const TimelineItem = ({ year, children }) => {
  const number = parseInt(year);
  const suffix = year.replace(number, '');

  return (
    <div className="flex flex-col items-center text-center max-w-[150px] md:max-w-[200px]">
      <span className="text-5xl font-bold text-black mb-3 w-40 inline-flex justify-center">
        <CountUp
          end={number}
          suffix={suffix}
          duration={5}      
          enableScrollSpy   
          scrollSpyDelay={300} 
          scrollSpyOnce={true}
        />
      </span>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
};

const Aboutus = () => {
  return (
    //  FIX: Removed the "-mt-10" class from here
    // Use the negative margin that matches your navbar's height
<div className="min-h-screen -mt-25 w-full bg-white">
      
      {/* Fixed Hero Section */}
      <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0'>
        
        {/* Left Side - IEEE PCS */}
        <div className='bg-gray-50 flex flex-col justify-center items-center p-8 lg:p-16'>
          <div className="text-center">
            <h1 className='text-6xl lg:text-8xl font-bold text-black mb-8'>
              IEEE PCS
            </h1>
            <p className='text-xl text-gray-600 max-w-md'>
              Professional Communication Society - Bridging the gap between technical expertise and professional expression.
            </p>
          </div>
        </div>
        
        {/* Right Side - Split into two sections */}
        <div className='grid grid-rows-2 h-screen'>
          {/* Top Section */}
          <div className='bg-gray-100 flex justify-center items-center p-8'>
            <div className='text-center max-w-md'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                Join Our Community
              </h2>
              <p className='text-gray-600 mb-6'>
                Become part of a vibrant community of engineers and communicators working together to enhance professional communication in the tech industry.
              </p>
              <button className='px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium'>
                Get Involved
              </button>
            </div>
          </div>
          {/* Bottom Section */}
          <div className='bg-white relative'>
            <Crazy />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full bg-white text-black py-16 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.07] flex items-center justify-center overflow-hidden">
          <span className="text-[18vw] font-extrabold text-gray-800 whitespace-nowrap">IEEE PCS</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          <TimelineItem year="250+">
            Members
          </TimelineItem>
          <div className="hidden md:block w-px h-24 bg-gray-300"></div>
          <TimelineItem year="80+">
            Events
          </TimelineItem>
          <div className="hidden md:block w-px h-24 bg-gray-300"></div>
          <TimelineItem year="150+">
            Workshops
          </TimelineItem>
          <div className="hidden md:block w-px h-24 bg-gray-300"></div>
          <TimelineItem year="30+">
            Sponsors
          </TimelineItem>
        </div>
      </div>

      {/* Half a Century Section */}
      <div className="w-full bg-neutral-100 flex items-center justify-center py-16 px-4 md:px-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-black text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[500px] md:min-h-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wider uppercase mb-8">
              HALF A CENTURY <br /> IN THE <br /> MAKING
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              The core objective of IEEE-PCS is to help engineers communicate technical concepts effectively in their workplaces.
              It emphasizes developing strong verbal and non-verbal communication skills.<br />
              Through this, IEEE-PCS bridges the gap between technical expertise and professional expression.
            </p>
          </div>

          <div className="relative bg-white p-4 lg:p-8 flex items-center justify-center overflow-hidden min-h-[500px] md:min-h-0">
            <div className="relative border border-gray-200 p-3 lg:p-5">
              <img
                src="/logo.png"
                alt="IEEE PCS"
                className="w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover grayscale"
              />
            </div>
            <div
              className="absolute top-0 right-0 w-80 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-black text-white text-xs font-bold uppercase py-2 px-20 text-center tracking-widest whitespace-nowrap italic" 
              style={{ 
                right: '-120px', 
                top: '70px' 
              }}
            >
              IEEE PCS
            </div>
          </div>
        </div>
      </div>
      
      {/* Lets Talk Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className='w-full'>
            <TriggerOnScroll>
              <LetsTalk />
            </TriggerOnScroll>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <SpicesHeroSection />
      <MaterialsSection />
      <RethinkingSection />
      <EyewearMarquee />
      
    </div>
  );
}

export default Aboutus;