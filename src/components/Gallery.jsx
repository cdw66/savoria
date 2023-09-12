import React from "react";
import Image from "next/image";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section className="p-[24px]">
      <span className="text-tan uppercase">Views Of Savoria</span>
      <h2 className="text-[32px] font-eb-garamond mb-5">Gallery</h2>
      {/* <div className="flex w-full justify-center bg-tan"> */}
      {/* <div className="flex flex-wrap bg-tan p-4 justify-between after:basis-[30%] after:flex-auto"> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-tan p-4">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />

        {/* <div className="bg-green-300 flex flex-wrap flex-grow flex-shrink-0 basis-0">
          <div className="w-full aspect-square relative sm:w-[30%]">
            <Image src="/" fill />
          </div>
          <div className="w-full aspect-square relative sm:w-[30%]">
            <Image src="/" fill />
          </div>
          <div className="w-full aspect-square relative sm:w-[30%]">
            <Image src="/" fill />
          </div>
          <div className="w-full aspect-square relative sm:w-[30%]">
            <Image src="/" fill />
          </div>
        </div> */}
        {/* <div className="w-full aspect-square relative sm:w-[30%]">
          <Image src="/" fill />
        </div>
        <div className="w-full aspect-square relative sm:w-[30%]">
          <Image src="/" fill />
        </div>
        <div className="w-full aspect-square relative sm:w-[30%]">
          <Image src="/" fill />
        </div>
        <div className="w-full aspect-square relative sm:w-[30%]">
          <Image src="/" fill />
        </div> */}
      </div>
      {/* // </div> */}
    </section>
  );
};

export default Gallery;
