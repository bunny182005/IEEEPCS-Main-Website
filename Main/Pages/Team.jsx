import React, { useState, useEffect } from 'react';
import Past from '../Components/past';

const Team = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('team-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        const multiplier = 0.20; // Reduced slightly for smoother movement
        
        if (sectionTop < windowHeight && sectionTop > 0) {
          setScrollY((windowHeight - sectionTop) * multiplier);
        } else if (sectionTop <= 0) {
          setScrollY(windowHeight * multiplier);
        } else {
          setScrollY(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = {
    column1: [
      { name: 'Pratham Lal', role: 'ChairPerson', imgSrc: '/2025/th.jpg', bgColor: 'blue' },
      { name: 'Aditya Bramhe', role: 'Design Head', imgSrc: '/path/to/aditya.jpg', bgColor: 'blue' },
      { name: 'Greeshma', role: 'Editorial Head', imgSrc: '/path/to/greeshma.jpg', bgColor: 'darkblue' },
      
    ],
    column2: [
      { name: 'Prashast Awasthi', role: 'Vice-ChairPerson', imgSrc: '/path/to/prashast.jpg', bgColor: 'navy' },
      { name: 'Vidhi Yadav', role: 'Events Head', imgSrc: '/path/to/vidhi.jpg', bgColor: 'green' },
    ],
    column3: [
      { name: 'Sahil Sureka', role: 'Secretary', imgSrc: '/2025/th.jpg', bgColor: 'black' },
      { name: 'Karthikeya', role: 'Technical Head', imgSrc: '/2025/th.jpg', bgColor: 'purple' },
      { name: 'Akakshar Sharma', role: 'Managment Head', imgSrc: '/path/to/akakshar.jpg', bgColor: 'purple' },
    ],
    column4: [
      { name: 'Aditya Khanna', role: 'Co-Secretary', imgSrc: '/path/to/khanna.jpg', bgColor: 'olive' },
      { name: 'Aarti Chhabaria', role: 'P&M Head', imgSrc: '/path/to/aarti.jpg', bgColor: 'indigo' },
    ],
  };

  const getBackgroundColor = (color) => {
    const colors = {
      pink: 'bg-pink-100',
      blue: 'bg-blue-100',
      navy: 'bg-slate-100',
      green: 'bg-green-100',
      black: 'bg-purple-100',
      brown: 'bg-amber-100',
      olive: 'bg-emerald-100',
      darkblue: 'bg-indigo-100',
      purple: 'bg-violet-100',
      teal: 'bg-teal-100',
      rose: 'bg-rose-100',
      indigo: 'bg-indigo-100',
    };
    return colors[color] || 'bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-white -mt-20">
      {/* Scroll down prompt */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-800">Scroll Down to See Team</h1>
      </div>

      <div id="team-section" className="relative py-20 px-8 overflow-hidden">
        <div>
          <div className="grid grid-cols-4 gap-6">
            
            {/* Column 1 */}
            <div 
              className="space-y-6 transition-transform duration-300 ease-out pt-[100px]"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {teamMembers.column1.map((member, idx) => (
                <div 
                  key={idx}
                  className={`${getBackgroundColor(member.bgColor)} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative`}
                  style={{ minHeight: '300px' }}
                >
                  <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="aspect-[3/5] w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                    <div className="bg-white bg-opacity-80 text-black w-full py-3 rounded-b-2xl flex flex-col items-center justify-center gap-1">
                      <span className="font-semibold text-lg">{member.name}</span>
                      <span className="text-sm opacity-90">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6 pt-16">
              {teamMembers.column2.map((member, idx) => (
                <div 
                  key={idx}
                  className={`${getBackgroundColor(member.bgColor)} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative`}
                  style={{ minHeight: '300px' }}
                >
                  <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="aspect-[3/5] w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                    <div className="bg-white bg-opacity-80 text-black w-full py-3 rounded-b-2xl flex flex-col items-center justify-center gap-1">
                      <span className="font-semibold text-lg">{member.name}</span>
                      <span className="text-sm opacity-90">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div 
              className="space-y-6 transition-transform duration-300 ease-out pt-[100px]"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {teamMembers.column3.map((member, idx) => (
                <div 
                  key={idx}
                  className={`${getBackgroundColor(member.bgColor)} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative`}
                  style={{ minHeight: '300px' }}
                >
                  <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="aspect-[3/5] w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                    <div className="bg-white bg-opacity-80 text-black w-full py-3 rounded-b-2xl flex flex-col items-center justify-center gap-1">
                      <span className="font-semibold text-lg">{member.name}</span>
                      <span className="text-sm opacity-90">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 4 */}
            <div className="space-y-6 pt-16">
              {teamMembers.column4.map((member, idx) => (
                <div 
                  key={idx}
                  className={`${getBackgroundColor(member.bgColor)} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative`}
                  style={{ minHeight: '300px' }}
                >
                  <img 
                    src={member.imgSrc} 
                    alt={member.name} 
                    className="aspect-[3/5] w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                    <div className="bg-white bg-opacity-80 text-black w-full py-3 rounded-b-2xl flex flex-col items-center justify-center gap-1">
                      <span className="font-semibold text-lg">{member.name}</span>
                      <span className="text-sm opacity-90">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
     
      {/* Past component */}
      <div className="h-screen -mt-20 flex items-center justify-center bg-white">
        <Past />
      </div>
    </div>
  );
};

export default Team;
