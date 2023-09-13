import React from "react";
import Image from "next/image";

const FeaturedItem = ({ item, index }) => {
  // console.log("item", item);
  // console.log("key", index);
  const { category, image, description, name } = item;

  return (
    <div
      className={`flex flex-col sm:items-center sm:gap-10 sm:justify-center sm:mx-auto ${
        index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="w-full aspect-square relative mb-2 sm:w-[300px]">
        <Image src={image} className="object-cover" fill alt={name} />
      </div>
      <div className="flex-col sm:w-[300px]">
        <p className="uppercase text-tan">{category}</p>
        <h3 className="font-eb-garamond text-[24px]">{name}</h3>
        <p className="font-lato">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedItem;
