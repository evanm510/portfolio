"use client";

import React, { useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";
import { Button } from "./Button";
import { ImageSlider } from "./ImageSlider";
import { sliderAlbumImages, fullAlbumImages } from "@/data/images";
import { IconButton } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";

const fullAlbumImagesArray = fullAlbumImages.map((img, index) => ({
  id: `image${index + 1}`,
  alt: img.alt,
  caption: "",
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
    <div className="px-4 py-2 md:px-20 md:py-6">
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
          <div className="bg-white rounded-lg w-11/12 h-5/6 overflow-y-auto relative">
            <div className="sticky top-0 left-0 right-0 bg-white shadow flex justify-end px-4 py-2 z-10">
              <IconButton variant="ghost" onClick={closeModal} size="3">
                <Cross1Icon color="#1e1e1e" className="w-5 h-5" />
              </IconButton>
            </div>
            <div className="p-4">
              <ImageGallery
                imagesInfoArray={fullAlbumImagesArray}
                columnCount={"auto"}
                columnWidth={500}
                gapSize={24}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
