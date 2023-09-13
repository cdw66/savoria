import React from "react";
import Image from "next/image";
import GalleryItem from "./GalleryItem";

const Gallery = ({ images }) => {
  return (
    <section className="p-[24px] py-10">
      <div className="bg-tan">
        <h2 className="lg:text-[48px] text-[36px] font-eb-garamond mb-5 text-center text-white pt-6">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images?.map((image, index) => (
            <GalleryItem key={index} item={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
