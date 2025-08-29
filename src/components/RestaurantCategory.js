import React, { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({category}) => {
    const title = category?.card?.card?.title;
    const items = category?.card?.card?.itemCards || [];
    const [showItems, setShowItems] = new useState(false);

    const handleClick = () => {
      setShowItems(!showItems);
    };

    //console.log(items);
    return (
      <div className="w-6/12 bg-gray-200 shadow-lg mx-auto rounded-lg px-8 py-2 my-8 " onClick={handleClick}>
        {/* Accordian header */}
        <div className="flex justify-between ">
                <div className="font-bold text-lg">{title}{" ("+items.length+")"}</div>
          <div>⬇️</div>
        </div>
        {/* Accordian body */}
        <div>
          {showItems && items.map((item, index) => (
            <CategoryList key={index} categoryCards={item} />
          ))}
        </div>
      </div>
    );
};

export default RestaurantCategory;
