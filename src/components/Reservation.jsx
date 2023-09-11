import Link from "next/link";
import Image from "next/image";

const Reservation = () => {
  return (
    <section className="p-[24px]">
      <span className="text-tan uppercase">Experience Savoria</span>
      <h2 className="text-[32px] font-eb-garamond mb-5">Reserve a Table</h2>
      <div className="w-full h-[200px] relative mb-4">
        <Image src="/images/table.jpg" fill />
      </div>
      <p className="font-lato">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="flex justify-center">
        <Link
          href="/reservations"
          className="font-eb-garamond uppercase text-[18px] bg-tan px-4 py-2 text-white mt-5 inline-block"
        >
          Make A Reservation &#8594;
        </Link>
      </div>
    </section>
  );
};

export default Reservation;
