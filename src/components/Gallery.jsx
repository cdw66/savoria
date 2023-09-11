import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="p-[24px]">
      <span className="text-tan uppercase">Views Of Savoria</span>
      <h2 className="text-[32px] font-eb-garamond mb-5">Gallery</h2>
      <div className="flex flex-wrap bg-tan p-4 gap-4">
        <div className="w-full aspect-square relative">
          <Image src="/" fill />
        </div>
        <div className="w-full aspect-square relative">
          <Image src="/" fill />
        </div>
        <div className="w-full aspect-square relative">
          <Image src="/" fill />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
