import React from 'react';

const RethinkingSection = () => {
  // Define your image paths here.
  // Replace these with your actual local paths (e.g., "/images/carousel/img1.jpg")
  // or external URLs.
  const carouselImages = [
    "/logo.png", // Replace with your first image path
    "/logo.png", // Replace with your second image path
    "/bglogo.png", // Replace with your second image path
    "/logo.png", // Replace with your third image path
    "/logo.png", // Replace with your first image path
    "/logo.png", // Replace with your second image path
    "/bglogo.png", // Replace with your second image path
    "/logo.png", // Replace with your third image path
  ];

  return (
    <div className="w-full bg-neutral-100 py-20 px-4 md:px-10 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Sunglasses Images */}
      

      {/* Quote */}
      <h2 className="relative z-10 mt-36 mb-56 text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-wide max-w-4xl mx-auto ">
        &ldquo;WE ARE IEEEPCS<br /> IDEAS MADE CLEAR <br /> DESIGNED COMMUNICATION <br /> ENGINEERED FOR IMPACT&rdquo;
      </h2>

      {/* Image Carousel */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex gap-4  mb-24 md:gap-6 justify-center">
          {/* Map over the carouselImages array */}
          {carouselImages.map((imageSrc, index) => (
            <div 
              key={index} // Use index as key if order is static and no items are added/removed/reordered
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-gray-300 border border-gray-400 flex items-center justify-center text-gray-600 text-xl font-bold"
            >
              <img 
                  src={imageSrc} // Use the imageSrc from the array
                  alt={`Carousel image ${index + 1}`} 
                  className="w-full h-full object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RethinkingSection;