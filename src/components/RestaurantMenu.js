import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const { id } = useParams();
  const {restaurantName,categories } = useRestaurantMenu(id);

  if (!categories || categories.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4">Restaurant Name : {restaurantName}</h1>
      <div>
        {categories.map((category,index)=>(<RestaurantCategory key={index} category={category} />))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
