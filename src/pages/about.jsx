import Image from "next/image";
import React from "react";
import Link from "next/link";

import { team } from "@/data/constants";
import TeamMember from "@/components/TeamMember";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/chef1.jpg')",
          objectFit: "cover",
        }}
        className="w-full h-[50vh] bg-cover bg-center relative z-0 lg:h-[80vh]"
      >
        <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
        <div className="flex flex-col z-20 w-full h-full text-white absolute text-center justify-center items-center">
          <span className="uppercase text-tan font-lato sm:text-[24px]">
            About Us
          </span>

          <h1 className="sm:text-[64px] text-[40px] sm:w-[60%] w-[80%] font-eb-garamond">
            The Savoria Story
          </h1>
          <p className="w-[80%] text-center font-lato text-[24px] sm:text-[32px]">
            Our farm to table philosophy & the team behind the cuisine.
          </p>
        </div>
      </div>

      <div className="p-[24px]">
        <div className="my-4">
          <span className="text-tan uppercase font-lato text-center sm:w-full inline-block">
            Authentic Culinary Craftsmanship
          </span>
          <p className="text-center font-eb-garamond text-[20px] sm:w-[50%] lg:w-[300px] sm:text-[24px] sm:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 my-[100px] lg:max-w-[60%] lg:mx-auto">
          <div className="w-full h-auto bg-green-300 aspect-square relative sm:w-[60%]">
            <Image src="/" fill />
          </div>

          <div className="w-full h-auto bg-green-300 aspect-square relative sm:w-[60%] sm:ml-auto">
            <Image src="/" fill />
          </div>
        </div>

        <div className="my-5 sm:flex sm:flex-row-reverse sm:items-center gap-4 lg:mx-auto lg:justify-center">
          <div className="lg:w-[600px]">
            <span className="uppercase text-tan font-lato">
              Quality & Balance
            </span>
            <h2 className="text-[32px] font-eb-garamond mb-5">
              Our Food Philosophy
            </h2>

            <p className="font-lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="w-full sm:min-w-[300px] bg-green-300 aspect-square relative my-5 lg:h-[600px] lg:w-[400px]">
            <Image src="/" fill />
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-[32px] font-eb-garamond sm:text-center">
            Meet Our Team
          </h2>
          <p className="font-lato sm:w-[50%] sm:mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 lg:grid-cols-4 lg:w-[80%] lg:justify-center lg:mx-auto">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>

        <div className="lg:w-[80%] lg:mx-auto">
          <span className="text-tan uppercase font-lato">
            Taste the Difference
          </span>
          <h2 className="text-[32px] font-eb-garamond mb-5">Visit Savoria</h2>
          <p className="font-lato mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col lg:flex-row gap-2 justify-center">
            <div
              style={{
                backgroundImage: "url('/images/philly.jpg')",
                objectFit: "cover",
              }}
              className="w-full h-[200px] bg-cover bg-center relative z-0"
            >
              <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
              <div className="flex flex-col w-full h-full z-20 absolute justify-center items-center text-white cursor-pointer">
                <Link
                  href="/locations/philadelphia"
                  className="text-white text-[36px] flex w-full h-full justify-center items-center font-eb-garamond"
                >
                  Philadelphia
                </Link>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url('/images/nyc.jpg')",
                objectFit: "cover",
              }}
              className="w-full h-[200px] bg-cover bg-center relative z-0"
            >
              <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
              <div className="flex flex-col w-full h-full z-20 absolute justify-center items-center text-white cursor-pointer">
                <Link
                  href="/locations/nyc"
                  className="text-white text-[36px] flex w-full h-full justify-center items-center font-eb-garamond"
                >
                  New York City
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
