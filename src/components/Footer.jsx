import React from "react";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between bg-dark p-[24px] mt-[36px]">
      <div className="text-white flex flex-col gap-4 sm:w-[40%]">
        <h1 className="font-caveat font-light text-[64px] my-0 p-0 leading-[72px]">
          Savoria
        </h1>
        <div className="flex gap-4">
          <Link href="http://twitter.com/" aria-label="Twitter">
            <IconBrandTwitterFilled width={32} height={32} />
          </Link>
          <Link href="http://facebook.com/" aria-label="Facebook">
            <IconBrandFacebookFilled width={32} height={32} />
          </Link>
          <Link href="http://instagram.com/" aria-label="Instagram">
            <IconBrandInstagram width={32} height={32} />
          </Link>
          <Link href="http://pinterest.com/" aria-label="Pinterest">
            <IconBrandPinterest width={32} height={32} />
          </Link>
        </div>
        <p className="font-lato mb-4">
          Locally sourced, seasonal ingredients and culinary artistry to create
          an unforgettable farm-to-table experience.
        </p>
        <span>&#169; Lorem Digital Services LLC 2023</span>
      </div>

      <div className="flex text-white gap-4 font-lato">
        <div className="flex flex-col">
          <div className="flex flex-col mb-3">
            <h3 className="font-eb-garamond text-[20px] mb-3">Philadelphia</h3>
            <span>1234 Savoria Rd.</span>
            <span>Philadelphia, PA 12345</span>
            <span>+1 (267) 555-0126</span>
          </div>
          <div className="flex flex-col">
            <h4 className="font-eb-garamond text-[18px] mb-2">Hours</h4>
            <span>Mon: Closed</span>
            <span>Tue-Thu: 4 PM - 9 PM</span>
            <span>Fri-Sun: 4 PM - 10:30 PM</span>
          </div>
        </div>

        <div className="flex flex-col font-lato">
          <div className="flex flex-col mb-3">
            <h3 className="font-eb-garamond text-[20px] mb-3">New York City</h3>
            <span>1234 Savoria Rd.</span>
            <span>New York, NY 12345</span>
            <span>+1 (267) 555-0126</span>
          </div>
          <div className="flex flex-col">
            <h4 className="font-eb-garamond text-[18px] mb-2">Hours</h4>
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
