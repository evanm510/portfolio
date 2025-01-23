import { useState } from "react";
import { Button } from "./Button";

const videoData = [
  "https://www.youtube.com/embed/AK_NQ4NiaG0",
  "https://www.youtube.com/embed/CcvzOl5z6yQ",
  "https://www.youtube.com/embed/eX7TsF_D_7c",
  "https://www.youtube.com/embed/lz6U_TC7hBM",
  "https://www.youtube.com/embed/S7vwWql45Jc",
];

export default () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[90%] bg-secondary shadow p-6 rounded-lg">
      <div className="text-2xl text-center mb-4">Music</div>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoData[currentVideoIndex]}
          title={videoData[currentVideoIndex]}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrev}>Previous Video</Button>
        <Button onClick={handleNext}>Next Video</Button>
      </div>
    </div>
  );
};
