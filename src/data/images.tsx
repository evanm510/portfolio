export const sliderAlbumImages = [
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

export const fullAlbumImages = Array.from({ length: 84 }, (_, index) => {
  const number = index + 1; // Start from 1
  return {
    imageSrc: `/portfolio_album/portfolio_photo-${number}.jpg`,
    alt: `Portfolio photo ${number}`,
  };
});
