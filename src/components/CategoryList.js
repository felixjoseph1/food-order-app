import React from 'react'
import {CDN_LOGO_img }from '../utils/constants'
const CategoryList = ({ categoryCards }) => {
    const name = categoryCards?.card?.info?.name;
    const description = categoryCards?.card?.info?.description;
    const imageId = categoryCards?.card?.info?.imageId;
    const price = categoryCards?.card?.info?.price || 10000;
  return (
    <div className="flex border-b-2 border-black my-2 mx-2 py-2 justify-between">
      <div className="flex flex-col w-9/12">
        <div className="text-md font-semibold">
          {name}
          {" - ₹ " + price / 100}
        </div>
        <div className="text-sm text-gray-700">{description}</div>
      </div>
      <div className="w-3/12 relative">
  <img src={CDN_LOGO_img + imageId} alt={name} className="rounded-lg" />
  <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold px-3 py-1 rounded shadow">
    Add+
  </button>
</div>

    </div>
  );
}

export default CategoryList
