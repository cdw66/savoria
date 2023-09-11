import React from "react";
import Image from "next/image";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-dark p-[24px] mt-[36px]">
      <div className="text-white flex flex-col gap-4">
        {/* <Image
            width={300}
            height={100}
            src="/images/savoria_logo_transparent.png"
            className="object-contain"
          /> */}
        <h1 className="font-caveat font-light text-[64px] my-0 p-0 leading-[72px]">
          Savoria
        </h1>
        <div className="flex gap-2">
          <IconBrandTwitterFilled />
          <IconBrandFacebookFilled />
          <IconBrandInstagram />
          <IconBrandPinterest />
        </div>
        <p className="my-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex text-white gap-4 ">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3>Philadelphia</h3>
            <span>1234 Savoria Rd.</span>
            <span>Philadelphia, PA 12345</span>
            <span>+1 (267) 555-0126</span>
          </div>
          <div className="flex flex-col">
            <h4>Hours</h4>
            <span>Mon: Closed</span>
            <span>Tue-Thu: 4 PM - 9 PM</span>
            <span>Fri-Sun: 4 PM - 10:30 PM</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3>New York City</h3>
            <span>1234 Savoria Rd.</span>
            <span>Philadelphia, PA 12345</span>
            <span>+1 (267) 555-0126</span>
          </div>
          <div className="flex flex-col">
            <h4>Hours</h4>
            <span>Mon: Closed</span>
            <span>Tue-Thu: 4 PM - 9 PM</span>
            <span>Fri-Sun: 4 PM - 10:30 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
