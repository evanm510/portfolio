"use client";

import React, { useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";
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

const imagesArray = images.map((img, index) => ({
  id: `image${index + 1}`,
  alt: img.alt,
  caption: img.alt,
  src: img.imageSrc,
}));

export default function Photography() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="w-[90%] bg-secondary p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className="text-2xl">Photography</div>
      </div>

      <ImageSlider images={images} aspectRatio="16/9" />

      <div className="flex justify-center mt-4">
        <Button onClick={openModal}>View Full Gallery</Button>
      </div>

      {isModalOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg w-11/12 h-5/6 p-4 overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
            >
              &times;
            </button>
            <ImageGallery
              imagesInfoArray={imagesArray}
              columnCount={"auto"}
              columnWidth={500}
              gapSize={24}
            />
          </div>
        </div>
      )}
    </div>
  );
}
