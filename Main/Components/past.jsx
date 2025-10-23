import React, { useState, useRef } from 'react';

// Sample data (same as before)
const pastTeamData = {
  2024: [
    { id: 1, name: 'Abhay Maheshwari', designation: 'Chairperson', imageUrl: '/2024/c.jpg' },
    { id: 2, name: 'Aakriti Goenka', designation: 'Vice Chairperson', imageUrl: '/2024/vc.jpg' },
    { id: 3, name: 'Arnav Trivedi', designation: 'Secretary', imageUrl: ' /2024/s.jpg' },
    { id: 4, name: 'Drishya Krishnakumar', designation: 'Co-secretary', imageUrl: ' /2024/cs.jpg' },
    { id: 5, name: 'Taruna Dhaddha', designation: 'Technical Head', imageUrl: ' /2024/th.jpg' },
    { id: 6, name: 'Anika Saxena', designation: 'Design Head', imageUrl: ' /2024/dh.jpg' },
     { id: 7, name: 'Soumyajit Pal', designation: 'Projects Head', imageUrl: ' /2024/ph.jpg' },
    { id: 8, name: 'Riddhi Thakare', designation: 'Managment Head', imageUrl: ' /2024/mh.jpg' },
    { id: 9, name: 'Joyeetha Nath', designation: 'Finance and HR', imageUrl: ' /2024/fh.jpg' },
    { id: 10, name: 'Prabhav Srivastava', designation: 'Public Relations', imageUrl: ' /2024/pr.jpg' },
 
 
  ],
  2023: [
    { id: 1, name: 'Ayush Tulshan', designation: 'Chairperson', imageUrl: '/2023/c.jpg' },
    { id: 2, name: 'Gaurav Singh', designation: 'Vice Chairperson', imageUrl: '/2023/vc.jpg' },
    { id: 3, name: 'Adira P', designation: 'Secretary', imageUrl: '/2023/s.jpg' },
    { id: 4, name: 'Ainesh', designation: 'Co-secretary', imageUrl: '/2023/cs.jpg' },
    { id: 5, name: 'Mehul', designation: 'Technical Head', imageUrl: '/2023/th.jpg' },
    { id: 6, name: 'Adit Kaushal', designation: 'Editorial Head', imageUrl: '/2023/eh.jpg' },
     { id: 7, name: 'Soumya Rathi', designation: 'R&D Lead', imageUrl: '/2023/r&d.jpg' },
    { id: 8, name: 'Shreya', designation: 'Managment Head', imageUrl: '/2023/mh.png' },
    { id: 9, name: 'Oindrila Paul', designation: 'Finance and HR', imageUrl: '/2023/fh.jpg' },
    { id: 10, name: 'Abhiram Sunil', designation: 'Public Relations', imageUrl: '/2023/pr.jpg' },
    { id: 11, name: 'Rajesh Kumar', designation: 'Design Head', imageUrl: '/2023/dh.jpg' },
  ],
  2022: [
    { id: 1, name: 'Krishanu Das', designation: 'Chairperson', imageUrl: '/2022/c.jpg' },
    { id: 2, name: 'Rohan B', designation: 'Vice Chairperson', imageUrl: '/2022/vc.jpeg' },
    { id: 3, name: 'Dilith Dinesh', designation: 'Secretary', imageUrl: '/2022/s.jpeg' },
    { id: 4, name: 'Manas Sahu', designation: 'Co-secretary', imageUrl: '/2022/cs.jpg' },
    { id: 5, name: 'Chirag Makwana', designation: 'Technical Head', imageUrl: '/2022/th.jpg' },
    { id: 6, name: 'Harshwardhan Jha', designation: 'Design Head', imageUrl: '/2022/dh.jpg' },
     { id: 7, name: 'Srishti Chopra', designation: 'Editorial Head', imageUrl: '/2022/ed.jpg' },
    { id: 8, name: 'Gauravi Mittal', designation: 'Managment Head', imageUrl: '/2022/mh.jpeg' },
    { id: 9, name: 'Shivang Singh', designation: 'Finance and HR', imageUrl: '/2022/hr.jpg' },
    { id: 10, name: 'Pulkit Saraf', designation: 'Public Relations', imageUrl: '/2022/pr.jpg' },
    { id: 11, name: 'Sidharth Nair', designation: 'Web Lead', imageUrl: '/2022/wl.jpeg' },
  ],
  2021: [
    { id: 1, name: 'Ayan Chandra', designation: 'Chairperson', imageUrl: '/2021/c.png' },
    { id: 2, name: 'Kshitij Arya', designation: 'Vice Chairperson', imageUrl: '/2021/vc.png' },
    { id: 3, name: 'Alap Bhakta', designation: 'Secretary', imageUrl: '/2021/s.png' },
    { id: 4, name: 'Pranjal Dwivedi', designation: 'Editorial Head', imageUrl: '/2021/eh.png' },
    { id: 5, name: 'Arshita Marwaha', designation: 'Technical Head', imageUrl: '/2021/th.png' },
    { id: 6, name: 'Ankit Bhanja', designation: 'Design Head', imageUrl: '/2021/dh.png' },
     { id: 7, name: 'Eshika Goyal', designation: 'Events Head', imageUrl: '/2021/evh.png' },
    { id: 8, name: 'Laveesha Mudgal', designation: 'Managment Head', imageUrl: '/2021/mh.png' },
    { id: 9, name: 'Hartej Singh', designation: 'Finance and HR', imageUrl: '/2021/hr.png' },
    { id: 10, name: 'Mansi Singh', designation: 'Public Relations', imageUrl: '/2021/pr.png' },
  ],
};

// CSS class names to hide the scrollbar
const hideScrollbarClasses = "scrollbar-thin scrollbar-none";

const Past = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const carouselRef = useRef(null); // Ref for the scrolling container

  const years = [2024, 2023, 2022, 2021];
  const currentTeam = pastTeamData[selectedYear] || [];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdownOpen(false);
    // Reset scroll to beginning when year changes
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      // Find the first item to measure
      const firstItem = carouselRef.current.children[0];
      if (!firstItem) return;

      // Get the width of the item
      const itemWidth = firstItem.offsetWidth;
      
      // Get the gap from the parent container
      const gap = parseFloat(window.getComputedStyle(carouselRef.current).gap) || 0;

      // Calculate total scroll amount: one item + one gap
      const scrollAmount = itemWidth + gap;

      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen  w-full  bg-white text-black flex flex-col p-8 md:p-16 overflow-hidden">
      
      {/* Top Section: EX-BOARD and Select Year Dropdown */}
      <div className="w-full max-w-7xl mx-auto mb-12">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-8">
          EX-BOARD
        </h2>
        <div className="flex items-center space-x-4 relative">
          <label htmlFor="year-select" className="text-2xl md:text-3xl font-semibold text-black">
            Select Year:
          </label>
          <div className="relative">
            <button
              id="year-select"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-100 text-black py-3 px-6 rounded-lg text-xl font-medium cursor-pointer flex items-center justify-between min-w-[150px] relative z-20 border border-gray-300 hover:bg-gray-200"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              {selectedYear}
              <svg
                className={`ml-2 w-5 h-5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-30 min-w-[150px] border border-gray-200"
                role="menu"
              >
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className={`block w-full text-left px-6 py-3 text-xl font-medium hover:bg-gray-100 transition-colors duration-200 ${
                      selectedYear === year ? 'bg-gray-100 text-blue-600' : 'text-black'
                    }`}
                    role="menuitem"
                  >
                    {selectedYear === year && (
                      <span className="inline-block w-4 mr-2">✓</span>
                    )}
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Section: Meet Our TEAM Header */}
      <div className="w-full text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center">
          <span className="text-gray-500 font-normal mr-2 text-2xl md:text-3xl">Meet Our</span>
          <span className="text-black relative">
            TEAM
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
          </span>
        </h3>
      </div>

      {/* Carousel Section */}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="relative w-full max-w-7xl">
          
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Carousel Viewport (Hides the scrollbar) */}
          <div 
            ref={carouselRef}
            className={`flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory ${hideScrollbarClasses} px-2 py-4`}
          >
            {currentTeam.map((member) => (
              <div 
                key={member.id} 
                // Each item is 1/4 of the width, minus spacing
                // On small screens, it's wider
                className="flex-none snap-start w-4/5 sm:w-1/2 md:w-1/3 lg:w-[calc(25%-1.5rem)]"
              >
                <div
                  className="bg-white rounded-2xl p-4 h-full flex flex-col justify-between border-2 border-gray-100 shadow-xl transition-shadow hover:shadow-2xl"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center pb-2">
                    <p className="text-xl font-bold text-black mb-1">{member.name}</p>
                    <p className="text-md text-gray-500">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;