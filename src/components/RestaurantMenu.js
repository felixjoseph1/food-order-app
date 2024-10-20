import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { menuItems, restaurantName } = useRestaurantMenu(id);

  if (!menuItems || menuItems.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>Restaurant Name : {restaurantName}</h1>
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
