import React from "react";
import FeaturedItem from "./FeaturedItem";
import Link from "next/link";

const Featured = ({ items }) => {
  //   items.map((item) => console.log(item));
  return (
    <section className="p-[24px] lg:py-[100px]">
      <div className="sm:text-center mb-10 lg:text-start lg:ml-[20%]">
        <span className="text-tan uppercase">Refresh your taste buds</span>
        <h2 className="text-[32px] font-eb-garamond mb-5">
          Featured Menu Items
        </h2>
        <p className="font-lato mb-5 max-w-[30em] inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link
          href="/menu"
          className="font-eb-garamond uppercase text-[18px] underline text-tan block"
        >
          See Our Full Menu &#8594;
        </Link>
      </div>
      <div className="flex flex-col gap-[48px] mt-5">
        {items.map((item, index) => (
          <FeaturedItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
