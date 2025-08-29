import React from 'react'
import {CDN_LOGO_img }from '../utils/constants'
const CategoryList = ({ categoryCards }) => {
    const name = categoryCards?.card?.info?.name;
    const description = categoryCards?.card?.info?.description;
    const imageId = categoryCards?.card?.info?.imageId;
  return (
    <div className='flex border-b-2 border-black my-2 mx-2 py-2 justify-between'>
      <div className="flex flex-col w-9/12">
        <div className='text-md font-semibold'>{name}</div>
        <div className='text-sm text-gray-700'>{description}</div>
      </div>
      <div className='w-3/12'>
        <img src={CDN_LOGO_img + imageId} alt={name} />
      </div>
    </div>
  );
}

export default CategoryList
