"use client";

import React, { useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";
import { Button } from "./Button";
import { ImageSlider } from "./ImageSlider";
import { sliderAlbumImages, fullAlbumImages } from "@/data/images";

const fullAlbumImagesArray = fullAlbumImages.map((img, index) => ({
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

      <ImageSlider images={sliderAlbumImages} aspectRatio="16/9" />

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
              imagesInfoArray={fullAlbumImagesArray}
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
