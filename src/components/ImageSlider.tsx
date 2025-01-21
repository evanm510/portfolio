import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useAssetViewer } from "./AssetViewer/AssetViewer";

type ImageSliderProps = {
  images: {
    imageSrc: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  const { openAssetViewer } = useAssetViewer();

  return (
    <section aria-label="Image Slider" className="relative w-full h-full">
      <a
        href="#after-image-slider-controls"
        className="absolute w-px h-px -m-px overflow-hidden border-0 clip-[rect(0,0,0,0)] focus-visible:top-0 focus-visible:left-0 focus-visible:border focus-visible:bg-white focus-visible:p-2 focus-visible:w-auto focus-visible:h-auto focus-visible:m-0 focus-visible:clip-auto focus-visible:z-50"
      >
        Skip Image Slider Controls
      </a>
      <div className="flex overflow-hidden w-full h-full">
        {images.map(({ imageSrc, alt }, index) => (
          <img
            key={imageSrc}
            src={imageSrc}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`object-cover w-full h-full flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out`}
            style={{ transform: `translateX(-${100 * imageIndex}%)` }}
            onClick={() => {
              openAssetViewer({
                name: alt,
                type: "image",
                hostPath: imageSrc,
              });
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 left-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:outline focus-visible:outline-auto"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft className="w-8 h-8 fill-black stroke-white" aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 right-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:outline focus-visible:outline-auto"
        aria-label="View Next Image"
      >
        <ArrowBigRight
          className="w-8 h-8 fill-black stroke-white"
          aria-hidden
        />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-4 h-4 cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125 focus-visible:outline focus-visible:outline-auto"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot
                className="w-full h-full fill-black stroke-white"
                aria-hidden
              />
            ) : (
              <Circle
                className="w-full h-full fill-black stroke-white"
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
