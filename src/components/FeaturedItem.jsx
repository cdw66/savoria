import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedItem = ({ item, index }) => {
  console.log("item", item);
  console.log("key", index);
  const { tagline, image, name, desc } = item;

  return (
    // <>
    <div
      className={`flex flex-col sm:items-center sm:gap-10 sm:justify-center sm:mx-auto ${
        index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="w-full aspect-square relative mb-2 sm:w-[300px]">
        <Image src={image} className="object-cover" fill />
      </div>
      <div className="flex-col sm:w-[300px]">
        <p className="uppercase text-tan">{tagline}</p>
        <h3 className="font-eb-garamond text-[24px]">{name}</h3>
        <p className="font-lato">{desc}</p>
      </div>
      {/* <Link
          href="menu"
          className="bg-tan w-max py-[18px] px-[24px] uppercase text-white no-underline self-center mt-4"
        >
          View Menu
        </Link> */}
    </div>
    // </>
  );
};

export default FeaturedItem;
