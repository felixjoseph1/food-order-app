import { CDN_LOGO_img } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    costForTwo,
    sla,
    locality,
    areaName,
  } = resData?.info;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col max-w-sm">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={CDN_LOGO_img + cloudinaryImageId}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
        <h4 className="text-gray-600 text-sm mb-2 truncate">
          {cuisines.join(", ")}
        </h4>

        <div className="flex items-center gap-2 text-sm mb-2">
          <span
            className={`px-2 py-1 rounded text-white text-xs font-semibold ${
              avgRating >= 4 ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {avgRating} ⭐
          </span>
          <span className="text-gray-500">{totalRatingsString}</span>
        </div>

        <div className="flex justify-between text-gray-700 text-sm mb-3 font-medium">
          <span>{costForTwo}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <h4 className="text-gray-500 text-xs mt-auto">
          {locality}, {areaName}
        </h4>
      </div>
    </div>
  );
};

// Higher order component
export const WithPromotedLabel = (RestaurantCard) => (props) =>
  (
    <div>
      <div className="absolute bg-black text-white m-2 p-2 rounded-lg">
        Promoted
      </div>
      <RestaurantCard {...props} />
    </div>
  );

