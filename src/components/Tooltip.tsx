import React, { ReactElement, useState } from "react";

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: ReactElement;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-sm font-medium px-3 py-2 rounded shadow-lg z-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
