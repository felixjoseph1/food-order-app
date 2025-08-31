import React, { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({category,showItems,setShowIndex}) => {
    const title = category?.card?.card?.title;
    const items = category?.card?.card?.itemCards || [];

    const handleClick = () => {
      setShowIndex();
    };

    //console.log(items);
    return (
      <div className="w-6/12 bg-gray-200 shadow-lg mx-auto rounded-lg px-8 py-2 my-8 cursor-pointer" onClick={handleClick}>
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
