import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantName, categories } = useRestaurantMenu(id);
  const [ showIndex, setShowIndex ] = useState(null);

  if (!categories || categories.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4">
        Restaurant Name : {restaurantName}
      </h1>
      <div>
        {/* RestaurantCategory is a controlled component. this component decides the behaviour of
        its child component(<RestaurantCategory />). so it is known as controlled component. */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            category={category}
            showItems={index===showIndex}
            setShowIndex={()=>{setShowIndex(showIndex==index?null:index)}}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
