import { Button } from "./Button";
import { ImageSlider } from "./ImageSlider";

const images = [
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-1.jpg",
    alt: "Portfolio image slider 1",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-2.jpg",
    alt: "Portfolio image slider 2",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-3.jpg",
    alt: "Portfolio image slider 3",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-4.jpg",
    alt: "Portfolio image slider 4",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-5.jpg",
    alt: "Portfolio image slider 5",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-6.jpg",
    alt: "Portfolio image slider 6",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-7.jpg",
    alt: "Portfolio image slider 7",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-8.jpg",
    alt: "Portfolio image slider 8",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-9.jpg",
    alt: "Portfolio image slider 9",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-10.jpg",
    alt: "Portfolio image slider 10",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-11.jpg",
    alt: "Portfolio image slider 11",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-12.jpg",
    alt: "Portfolio image slider 12",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-13.jpg",
    alt: "Portfolio image slider 13",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-14.jpg",
    alt: "Portfolio image slider 14",
  },
  {
    imageSrc: "photography_slider_images/portfolio_image_slider-15.jpg",
    alt: "Portfolio image slider 15",
  },
];

export default () => {
  return (
    <div className="w-[90%] bg-secondary p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className="text-2xl">Photography</div>
      </div>
      <ImageSlider images={images} aspectRatio="16/9" />
      <div className="flex justify-center mt-4">
        <Button onClick={() => {}}>View Full Gallery</Button>
      </div>
    </div>
  );
};
