import Hero from "@/components/Hero";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/constants";
import HomeMenuItem from "@/components/FeaturedItem";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Reservation from "@/components/Reservation";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <About />
      <Reviews />
      <Featured items={featuredItems} />
      <Reservation />
      <Gallery />
    </>
  );
}
