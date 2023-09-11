import { useState, useEffect } from "react";
import { menuItems } from "@/data/constants";
import MenuItem from "@/components/MenuItem";

const Menu = ({ items }) => {
  const [category, setCategory] = useState("ALL ITEMS");

  const appetizers = menuItems.filter((item) => item.category === "APPETIZERS");
  const mains = menuItems.filter((item) => item.category === "MAINS");
  const fromTheFarm = menuItems.filter(
    (item) => item.category === "FROM THE FARM"
  );
  const desserts = menuItems.filter((item) => item.category === "DESSERTS");

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

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
          <span className="uppercase text-tan font-lato">About Us</span>

          <h1 className="my-0 text-[40px] w-[80%] font-eb-garamond">
            Our Menu
          </h1>
          <p className="my-0 w-[80%] text-center font-lato">
            Our farm to table philosophy & the team behind the cuisine.
          </p>
        </div>
      </div>

      <div className="p-[24px]">
        <h2 className="text-[28px] font-eb-garamond mb-5 text-center">
          {category
            .toLowerCase()
            .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <button
            className="px-4 py-2 bg-white hover:bg-tan border-[2px] border-gray-300 font-eb-garamond"
            onClick={handleChange}
          >
            All Items
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-tan border-[2px] border-gray-300 font-eb-garamond"
            onClick={handleChange}
          >
            Appetizers
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-tan border-[2px] border-gray-300 font-eb-garamond"
            onClick={handleChange}
          >
            Mains
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-tan border-[2px] border-gray-300 font-eb-garamond"
            onClick={handleChange}
          >
            From the Farm
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-tan border-[2px] border-gray-300 font-eb-garamond"
            onClick={handleChange}
          >
            Desserts
          </button>
        </div>

        <div>
          {(category === "ALL ITEMS" || category === "APPETIZERS") && (
            <>
              <h3 className="font-eb-garamond text-[20px] mb-4">Appetizers</h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {appetizers.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "MAINS") && (
            <>
              <h3 className="font-eb-garamond text-[20px] mb-4">
                Main Courses
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {mains.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "FROM THE FARM") && (
            <>
              <h3 className="font-eb-garamond text-[20px] mb-4">
                From the Farm
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {fromTheFarm.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}

          {(category === "ALL ITEMS" || category === "DESSERTS") && (
            <>
              <h3 className="font-eb-garamond text-[20px] mb-4">Desserts</h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {desserts.map((item) => (
                  <MenuItem itemData={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div>{/* For each menu item, render item */}</div>
    </>
  );
};

export default Menu;
