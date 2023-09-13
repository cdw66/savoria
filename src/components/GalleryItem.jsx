import React from "react";
import Image from "next/image";

const GalleryItem = ({ item }) => {
  return (
    <div className="w-full aspect-square relative">
      <Image src={item.url} fill className="object-cover" alt="Gallery image" />
    </div>
  );
};

export default GalleryItem;
