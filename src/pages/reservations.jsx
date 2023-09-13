import React from "react";
import Link from "next/link";
import Image from "next/image";

const Reservations = () => {
  return (
    <>
      <div className="w-full h-[300px] relative mb-4">
        <Image
          src="/images/table.jpg"
          fill
          className="object-cover"
          alt="A restaurant table setting"
        />
      </div>
      <section className="p-[24px]">
        <div className="sm:max-w-[50%] sm:m-auto">
          <span className="text-tan uppercase">Experience Savoria</span>
          <h2 className="text-[32px] font-eb-garamond mb-5">Reserve a Table</h2>
          <p className="font-lato sm:mb-8 sm:text-[18px]">
            Our goal at Savoria is to ensure that every moment spent with us is
            a cherished memory. We encourage you to make a reservation in
            advance to secure your preferred dining time. Our online reservation
            system is easy and convenient, allowing you to plan your visit
            effortlessly. Whether it's an intimate dinner for two or a
            celebration with friends, we're here to accommodate your needs and
            create an unforgettable dining experience. Join us at Savoria and
            let our team craft a culinary journey just for you.
          </p>
          <div className="flex justify-center">
            <Link
              href="http://www.opentable.com/"
              className="font-eb-garamond uppercase text-[18px] bg-tan px-4 py-2 text-white mt-5 inline-block"
            >
              Make A Reservation &#8594;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;
