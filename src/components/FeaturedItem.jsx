import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedItem = ({ item }) => {
  console.log("item", item);
  const { tagline, image, name, desc } = item;

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full aspect-square relative mb-2">
          <Image src={image} className="object-cover" fill />
        </div>
        <p className="uppercase text-tan">{tagline}</p>
        <h3 className="font-eb-garamond text-[24px]">{name}</h3>
        <p className="font-lato">{desc}</p>
        {/* <Link
          href="menu"
          className="bg-tan w-max py-[18px] px-[24px] uppercase text-white no-underline self-center mt-4"
        >
          View Menu
        </Link> */}
      </div>
    </>
  );
};

export default FeaturedItem;
