import React, { useState, useEffect, useRef } from 'react'; // <-- 1. Import useRef

// --- Data for all media blocks (Unchanged) ---
const mediaBlocksData = [
  // ... (all your media block data)
  {
    id: 1,
    baseClass: "absolute top-8 right-72 w-52 h-52 rounded-3xl overflow-hidden z-20",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-75 translate-x-40 -translate-y-20 rotate-12",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '100ms',
    duration: '1000ms',
    loopInterval: 4000,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop' },
    ]
  },
  {
    id: 2,
    baseClass: "absolute top-52 right-11 w-96 h-64 rounded-3xl overflow-hidden z-10",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-90 translate-x-32 translate-y-16 rotate-8",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '300ms',
    duration: '800ms',
    loopInterval: 5500,
    media: [
      { type: 'video', src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop' },
      { type: 'video', src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop' },
    ]
  },
  {
    id: 3,
    baseClass: "absolute top-80 left-56 w-80 h-60 rounded-3xl overflow-hidden z-30",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-85 -translate-x-24 translate-y-24 -rotate-6",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '500ms',
    duration: '1000ms',
    loopInterval: 4000,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop' },
    ]
  },
  {
    id: 4,
    baseClass: "absolute bottom-[-9px] left-[-320px] w-44 h-40 rounded-3xl overflow-hidden z-20",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-70 -translate-x-32 translate-y-20 -rotate-15",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '200ms',
    duration: '1100ms',
    loopInterval: 3000,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2072&auto=format&fit=crop' },
    ]
  },
  {
    id: 5,
    baseClass: "absolute bottom-[-100px] left-20 w-56 h-72 rounded-3xl overflow-hidden z-10",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-80 -translate-x-28 translate-y-32 rotate-10",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '400ms',
    duration: '1000ms',
    loopInterval: 5000,
    media: [
      { type: 'video', src: 'https://test-videos.co.uk/vids/sintel/mp4/av1/360/Sintel_360_10s_1MB.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop' },
    ]
  },
  {
    id: 6,
    baseClass: "absolute bottom-[-40px] left-96 w-52 h-56 rounded-3xl overflow-hidden z-20",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-75 translate-x-20 translate-y-28 -rotate-8",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '600ms',
    duration: '900ms',
    loopInterval: 4000,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2175&auto=format&fit=crop' },
    ]
  },
  {
    id: 7,
    baseClass: "absolute bottom-0 right-12 w-56 h-80 rounded-3xl overflow-hidden z-40",
    animationClass: "transition-all ease-out",
    initialState: "opacity-0 scale-95 translate-x-36 translate-y-20 rotate-12",
    finalState: "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0",
    delay: '700ms',
    duration: '1000ms',
    loopInterval: 3500,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1974&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1925&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop' },
    ]
  },
];

// --- Component to handle internal looping (Unchanged) ---
function MediaBlock({ block, isAnimating }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { 
    baseClass, 
    animationClass, 
    initialState, 
    finalState, 
    delay, 
    media, 
    duration, 
    loopInterval 
  } = block;

  // Effect for internal media loop
  useEffect(() => {
    if (media.length <= 1) return;
    const loopTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, loopInterval || 4000);
    return () => clearTimeout(loopTimer);
  }, [currentIndex, media.length, loopInterval]);

  return (
    <div
      className={`${baseClass} ${animationClass} ${isAnimating ? initialState : finalState}`}
      style={{
        transitionProperty: "all",
        transitionDuration: duration || "1000ms", // Use the correct duration
        transitionDelay: isAnimating ? '0ms' : delay, // Apply delay only when animating in
      }}
    >
      <div className="relative w-full h-full">
        {media.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main component ---
export default function TeamHeroSection() {
  const [isAnimating, setIsAnimating] = useState(true);
  const headingRef = useRef(null); // <-- 2. Create a ref

  // 3. This effect now watches the heading
  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the heading is in the viewport (at the center)
        if (entry.isIntersecting) {
          setIsAnimating(false); // Trigger animation
          observer.unobserve(element); // Only trigger once
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Triggers when the element hits the vertical center
        threshold: 0
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); // Runs once on mount

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Main heading */}
      <div 
        ref={headingRef} // <-- 4. Attach the ref to the heading's container
        className="absolute left-24 top-1/2 -translate-y-1/2 z-10"
      >
        <h1 className="text-9xl font-bold leading-tight">
          A Team That's<br />
          Anything But<br />
          Ordinary
        </h1>
      </div>

      {/* Image grid */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[900px] h-[700px]">
        {mediaBlocksData.map((block) => (
          <MediaBlock key={block.id} block={block} isAnimating={isAnimating} />
        ))}
      </div>
    </div>
  );
}