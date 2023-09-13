import Link from "next/link";
import Image from "next/image";

const Reservation = () => {
  return (
    <section className="p-[24px]">
      <div className="w-full h-[200px] lg:h-[40vh] relative mb-4">
        <Image
          src="/images/table.jpg"
          fill
          className="object-cover"
          alt="A restaurant table setting"
        />
      </div>
      <div className="lg:block lg:w-[50%] lg:mx-auto">
        <span className="text-tan uppercase">Experience Savoria</span>
        <h2 className="lg:text-[48px] text-[36px] font-eb-garamond mb-5">
          Reserve a Table
        </h2>
      </div>
      <p className="font-lato lg:w-[50%] lg:mx-auto">
        Ready to embark on a culinary journey at Savoria? Reserve your table now
        to savor the seasonal flavors and warm ambiance of our farm-to-table
        restaurant. Whether it's a special occasion or a spontaneous night out,
        we're here to make your dining experience unforgettable. Join us and let
        our team craft a memorable meal that will leave you coming back for
        more.
      </p>
      <div className="flex justify-center">
        <Link
          href="http://www.opentable.com/"
          className="font-eb-garamond uppercase text-[18px] bg-tan px-4 py-2 text-white mt-5 inline-block"
        >
          Make A Reservation &#8594;
        </Link>
      </div>
    </section>
  );
};

export default Reservation;
