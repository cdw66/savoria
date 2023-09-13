import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Reservation from "@/components/Reservation";
import Gallery from "@/components/Gallery";
import { useAuth } from "@/context/AuthContext";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function Home({ menuData, reviews, galleryImages }) {
  return (
    <>
      <Hero />
      <About />
      <Reviews reviews={reviews} />
      <Featured items={menuData} />
      <Reservation />
      <Gallery images={galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  const menuQuery = query(
    collection(db, "menu-items"),
    where("featured", "!=", false)
  );
  const menuSnap = await getDocs(menuQuery);
  const menuData = menuSnap.docs.map((doc) => ({
    ...doc.data(),
  }));

  const reviewsSnap = await getDocs(collection(db, "reviews"));
  const reviews = reviewsSnap.docs.map((doc) => ({
    ...doc.data(),
  }));

  const gallerySnap = await getDocs(collection(db, "gallery"));
  const galleryImages = gallerySnap.docs.map((doc) => ({
    ...doc.data(),
  }));

  return {
    props: {
      menuData,
      reviews,
      galleryImages,
    },
    revalidate: 60,
  };
}
