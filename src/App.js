import React, { useState } from "react";

const App = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  return (
    <div className="flex w-full mt-4 h-64 ml-3 pr-6">
      {/* First image (Strength) */}
      <div
        className={`relative h-full overflow-hidden transition-all duration-300 ${
          hoveredImage === 1
            ? "flex-[5]"
            : hoveredImage
            ? "flex-[1]"
            : "flex-[2]"
        }`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="STRENGTH.jpg"
          alt="Strength"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-2 text-gray-200 text-[18px] font-light tracking-wide">
          STRENGTH
        </div>
      </div>

      {/* Second image (Mobility) */}
      <div
        className={`relative h-full overflow-hidden transition-all duration-300 ${
          hoveredImage === 2
            ? "flex-[4]"
            : hoveredImage
            ? "flex-[1.5]"
            : "flex-[2.5]"
        }`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="Mobility2.jpg"
          alt="Mobility"
          className={`w-full h-full object-fill transition-transform duration-200 ${
            hoveredImage === 2 ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute top-8 left-2 text-gray-500 text-[18px] font-light tracking-wide">
          MOBILITY
        </div>
      </div>

      {/* Third image (Drills) */}
      <div
        className={`relative h-full overflow-hidden transition-all duration-300 ${
          hoveredImage === 3
            ? "flex-[5]"
            : hoveredImage
            ? "flex-[1]"
            : "flex-[2]"
        }`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="drills.webp"
          alt="Drills"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-1 text-gray-300 text-[18px] font-light tracking-wide">
          DRILLS
        </div>
      </div>
    </div>
  );
};

export default App;

