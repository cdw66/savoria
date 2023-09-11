import Image from "next/image";
import React from "react";

const MenuItem = ({ itemData }) => {
  const { name, description, allergens, price, image } = itemData;

  return (
    <div key={name} className="mb-6 max-w-[300px]">
      {/* <img src={image} /> */}
      <div className="w-full aspect-square relative mb-4">
        <Image src={image} fill className="object-cover" />
      </div>
      <h4 className="text-tan uppercase font-lato">{name}</h4>
      <span className="font-eb-garamond text-[20px]">${price}</span>
      <p className="text-lato">{description}</p>
      {allergens?.length > 0 && (
        <span className="font-eb-garamond text-gray-600 italic">
          Allergens: {allergens.join(", ")}
        </span>
      )}
    </div>
  );
};

export default MenuItem;
