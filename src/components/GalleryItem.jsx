import React from "react";
import Image from "next/image";

const GalleryItem = () => {
  return (
    <div className="w-full aspect-square relative">
      <Image src="/" fill />
    </div>
  );
};

export default GalleryItem;
