import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="p-[24px]">
      <span className="text-tan uppercase font-lato">
        Refresh your taste buds
      </span>
      <h2 className="text-[32px] font-eb-garamond mb-5">
        Enjoy An Exceptional Journey of Taste
      </h2>
      <p className="font-lato">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link
        href="/about"
        className="font-eb-garamond uppercase text-[18px] underline text-tan mt-5 inline-block"
      >
        Read More &#8594;
      </Link>
    </section>
  );
};

export default About;
