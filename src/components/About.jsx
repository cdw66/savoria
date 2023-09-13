import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex p-[24px] h-auto gap-10 items-center lg:justify-center sm:py-[100px] py-[48px]">
      <div className="min-w-[250px] lg:w-[600px] h-[500px] relative hidden sm:inline-block">
        <Image
          src="/images/table.jpg"
          fill
          className="object-cover"
          alt="A restaurant table setting"
        />
      </div>
      <div className="flex flex-col lg:w-[600px]">
        <span className="text-tan uppercase font-lato">
          Refresh your taste buds
        </span>
        <h2 className="lg:text-[48px] text-[36px] font-eb-garamond mb-5">
          Indulge in Unforgettable Flavors
        </h2>
        <p className="font-lato">
          Welcome to Savoria, where culinary artistry meets the essence of
          farm-to-table dining. Our philosophy is simple yet profound: we
          believe that the freshest, locally sourced ingredients are the heart
          of exceptional cuisine. With a commitment to sustainability and
          seasonality, we craft dishes that celebrate the rich flavors of each
          passing season. Learn about our dedicated team, the passionate
          individuals who bring their expertise and creativity to every plate.
          Discover the stories behind our commitment to local farmers and
          producers, and see how our journey has evolved.
        </p>
        <Link
          href="/about"
          className="font-eb-garamond uppercase text-[18px] underline text-tan mt-5 inline-block"
        >
          Read More &#8594;
        </Link>
      </div>
    </section>
  );
};

export default About;
