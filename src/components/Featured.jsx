import React from "react";
import FeaturedItem from "./FeaturedItem";
import Link from "next/link";

const Featured = ({ items }) => {
  return (
    <section className="p-[24px] lg:py-[100px]">
      <div className="sm:text-center mb-10 lg:text-start lg:ml-[20%]">
        <span className="text-tan uppercase">Our Favorites</span>
        <h2 className="lg:text-[48px] text-[36px] font-eb-garamond mb-5">
          Featured Menu Items
        </h2>
        <p className="font-lato mb-5 max-w-[30em] inline-block">
          Experience culinary delight with our featured menu items, each
          thoughtfully crafted to showcase the best of farm-to-table cuisine.
          From succulent herb-roasted chicken to the decadent chocolate lava
          cake, these dishes embody the heart and soul of Savoria's commitment
          to exceptional flavors and locally sourced ingredients.
        </p>
        <Link
          href="/menu"
          className="font-eb-garamond uppercase text-[18px] underline text-tan block"
        >
          See Our Full Menu &#8594;
        </Link>
      </div>
      <div className="flex flex-col gap-[48px] mt-5">
        {items?.map((item, index) => (
          <FeaturedItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
