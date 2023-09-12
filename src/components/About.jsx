import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex p-[24px] h-auto gap-10 items-center lg:justify-center py-[100px]">
      {/* <div className="flex gap-10 h-auto"> */}
      <div className="min-w-[250px] lg:w-[600px] h-[500px] relative bg-green-300 hidden sm:inline-block">
        <Image src="/images/table.jpg" fill className="object-cover" />
      </div>
      <div className="flex flex-col lg:w-[600px]">
        <span className="text-tan uppercase font-lato">
          Refresh your taste buds
        </span>
        <h2 className="text-[32px] font-eb-garamond mb-5">
          Enjoy An Exceptional Journey of Taste
        </h2>
        <p className="font-lato">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link
          href="/about"
          className="font-eb-garamond uppercase text-[18px] underline text-tan mt-5 inline-block"
        >
          Read More &#8594;
        </Link>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
