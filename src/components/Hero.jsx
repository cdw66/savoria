import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/images/interior.jpg')",
          objectFit: "cover",
        }}
        className="w-full lg:h-[80vh] h-[50vh] bg-cover bg-center relative z-0"
      >
        <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
        <div className="flex flex-col z-20 w-full h-full text-white absolute text-center justify-center items-center">
          <span className="uppercase text-tan font-lato sm:text-[24px]">
            Fresh - Healthy - Tasty
          </span>
          <h1 className="sm:text-[64px] text-[40px] font-eb-garamond lg:text-[86px]">
            Authentic Farm to
            <br />
            Table Cuisine
          </h1>
          {/* <div>Reserve a Table</div> */}
          <Link
            href="http://www.opentable.com/"
            className="font-eb-garamond uppercase sm:text-[24px] text-[18px] bg-tan px-4 py-2 text-white mt-5 inline-block"
          >
            Make A Reservation &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
