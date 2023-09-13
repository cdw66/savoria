import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

const Menu = ({ menuData }) => {
  const [category, setCategory] = useState("ALL ITEMS");

  console.log(menuData);

  const appetizers = menuData?.filter((item) => item.category === "APPETIZERS");
  const mains = menuData?.filter((item) => item.category === "MAINS");
  const fromTheFarm = menuData?.filter(
    (item) => item.category === "FROM THE FARM"
  );
  const desserts = menuData?.filter((item) => item.category === "DESSERTS");

  const handleChange = (e) => {
    setCategory(e.target.innerText.toUpperCase());
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/menu.jpg')",
          objectFit: "cover",
        }}
        className="w-full h-[50vh] bg-cover bg-center relative z-0"
      >
        <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
        <div className="flex flex-col z-20 w-full h-full text-white absolute text-center justify-center items-center">
          <span className="uppercase text-tan font-lato sm:text-[24px]">
            About Us
          </span>

          <h1 className="sm:text-[64px] text-[40px] sm:w-[60%] w-[80%] font-eb-garamond">
            Our Menu
          </h1>
          <p className="w-[80%] text-center font-lato text-[24px] sm:text-[32px]">
            Explore Savoria's current menu items.
          </p>
        </div>
      </div>

      <div className="p-[24px] lg:p-[72px]">
        <h2 className="text-[28px] sm:text-[36px] font-eb-garamond mb-5 text-center">
          {category
            .toLowerCase()
            .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-5 sm:text-[24px] lg:text-[16px]">
          <button
            className={`px-4 py-2 hover:bg-tan border-[2px] border-gray-300 font-eb-garamond lg:px-8 lg:py-4 duration-200 hover:text-white uppercase ${
              category === "ALL ITEMS" ? "bg-tan text-white" : "bg-white"
            }`}
            onClick={handleChange}
          >
            All Items
          </button>
          <button
            className={`px-4 py-2 hover:bg-tan border-[2px] border-gray-300 font-eb-garamond lg:px-8 lg:py-4 duration-200 hover:text-white uppercase ${
              category === "APPETIZERS" ? "bg-tan text-white" : "bg-white"
            }`}
            onClick={handleChange}
          >
            Appetizers
          </button>
          <button
            className={`px-4 py-2 hover:bg-tan border-[2px] border-gray-300 font-eb-garamond lg:px-8 lg:py-4 duration-200 hover:text-white uppercase ${
              category === "MAINS" ? "bg-tan text-white" : "bg-white"
            }`}
            onClick={handleChange}
          >
            Mains
          </button>
          <button
            className={`px-4 py-2 hover:bg-tan border-[2px] border-gray-300 font-eb-garamond lg:px-8 lg:py-4 duration-200 hover:text-white uppercase ${
              category === "FROM THE FARM" ? "bg-tan text-white" : "bg-white"
            }`}
            onClick={handleChange}
          >
            From the Farm
          </button>
          <button
            className={`px-4 py-2 hover:bg-tan border-[2px] border-gray-300 font-eb-garamond lg:px-8 lg:py-4 duration-200 hover:text-white uppercase ${
              category === "DESSERTS" ? "bg-tan text-white" : "bg-white"
            }`}
            onClick={handleChange}
          >
            Desserts
          </button>
        </div>

        <div>
          {(category === "ALL ITEMS" || category === "APPETIZERS") && (
            <>
              <h3 className="font-eb-garamond text-[24px] sm:text-[32px] mb-4">
                Appetizers
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {appetizers?.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "MAINS") && (
            <>
              <h3 className="font-eb-garamond text-[24px] sm:text-[32px] mb-4">
                Main Courses
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {mains?.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "FROM THE FARM") && (
            <>
              <h3 className="font-eb-garamond text-[24px] sm:text-[32px] mb-4">
                From the Farm
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {fromTheFarm?.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "DESSERTS") && (
            <>
              <h3 className="font-eb-garamond text-[24px] sm:text-[32px] mb-4">
                Desserts
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {desserts?.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const menuSnap = await getDocs(collection(db, "menu-items"));
  const menuData = menuSnap.docs.map((doc) => ({
    ...doc.data(),
  }));

  return {
    props: {
      menuData,
    },
    revalidate: 60,
  };
}

export default Menu;
