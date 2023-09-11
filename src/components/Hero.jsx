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
        className="w-full h-[50vh] bg-cover bg-center relative z-0"
      >
        <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
        <div className="flex flex-col z-20 w-full h-full text-white absolute text-center justify-center items-center">
          <span className="uppercase text-tan font-lato">
            Fresh - Healthy - Tasty
          </span>
          <h1 className="my-0 text-[40px] w-[80%] font-eb-garamond">
            Authentic Farm to Table Cuisine
          </h1>
          {/* <div>Reserve a Table</div> */}
          <Link
            href="/reservations"
            className="font-eb-garamond uppercase text-[18px] bg-tan px-4 py-2 text-white mt-5 inline-block"
          >
            Make A Reservation &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;