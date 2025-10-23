import React from "react";

const MaterialsSection = () => (
  <>
    {/* --- MAIN SECTION --- */}

    

    {/* --- BOTTOM MARQUEE --- */}
    <div className="w-full bg-black text-white py-6 flex overflow-hidden">
      <div className="flex-shrink-0 flex items-center animate-marquee whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-4xl font-extrabold tracking-widest mx-4">
              IEEE PCS
            </span>
            <span className="text-5xl font-light mx-4">*</span>
          </React.Fragment>
        ))}
      </div>
    </div>


     <div className="relative w-full bg-[#f7f7f7] text-black px-6 md:px-12  mt-44 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2  items-start relative">
        {/* --- LEFT COLUMN (IMAGES) --- */}
        <div className="relative w-full">
          {/* Top sunglasses image */}
          <div className="relative w-[85%]">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1760&auto=format&fit=crop"
              alt="Premium sunglasses"
              className="w-full h-auto object-cover grayscale"
            />
          </div>
          

          {/* Overlapping model photo */}
          <div className="absolute top-[50%] left-[29.5%] w-[70%] shadow-2xl border-[30px] border-white z-20">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1760&auto=format&fit=crop"
              alt="Model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom black square */}
          <div className="absolute -bottom-[27%]  left-[10%] w-[38%] aspect-square bg-black z-0"></div>
        </div>

        {/* --- RIGHT COLUMN (TEXTS) --- */}
        <div className="flex flex-col justify-start gap-10 md:gap-16">
          {/* Premium Materials */}
          <div>
            <h2
              className="text-5xl md:text-6xl font-extrabold uppercase mb-4  ml-3.5 leading-none"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                letterSpacing: "-0.02em",
              }}
            >
              Premium Materials
            </h2>
            <p className="text-gray-800 text-sm md:text-base ml-3.5 leading-relaxed max-w-sm">
              Titanium, acetate, and gold — responsibly sourced and meticulously
              selected for enduring quality.
            </p>
          </div>

          {/* Heritage Style */}
          <div className="relative">
            <h2
              className="text-5xl  ml-3.5 md:text-6xl font-extrabold uppercase mb-4 leading-none"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                letterSpacing: "-0.02em",
              }}
            >
              Heritage Style
            </h2>
            <p className="text-gray-800  ml-3.5 text-sm md:text-base leading-relaxed max-w-sm">
              Classic meets modern aesthetics in designs that honor tradition
              while defining contemporary elegance.
            </p>

            <span className="absolute left-0 mt-6 text-6xl font-light">*</span>
          </div>

          {/* Timeless Design */}
          <div className="bg-black text-white p-8 md:p-10 mt-4 md:mt-8 w-[90%]">
            <h2
              className="text-5xl md:text-6xl font-extrabold uppercase mb-4 leading-none"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                letterSpacing: "-0.02em",
              }}
            >
              Timeless Design
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
              Created to be collected, not discarded. Our pieces transcend
              seasonal trends to become lasting signatures.
            </p>
          </div>
        </div>
      </div>
    </div>


    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `}</style>
  </>
);

export default MaterialsSection;
