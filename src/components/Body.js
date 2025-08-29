import { resList as restaurantList } from "../utils/data";
import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { data as dummyData} from "../utils/data.json"

const Body = () => {
  // Local State Variable - Super powerful variable
  const [resList, setresList] = useState([]); //use restaurantList for initial state
  const [filteredData, setFilteredData] = useState([]);
  const [search, setsearch] = useState("");
  const onlineStatus = useOnlineStatus();
  //whenever state variable changes, react will run a reconciliation process (re-renders the component)

  // if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] = > called everytime btnNameReact is updated
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // 'https://www.swiggy.com/mapi/homepage/getCards?lat=13.0849557&lng=80.2101342'
    );

    const resData = await data.json();
    // console.log(resData);
    // console.log(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setresList(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // console.log(resData);
    // console.log(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    // setresList(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredData(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus) {
    return <h1>You're offline!!..Please check your internet connection!!.</h1>;
  }

  // Higher order
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  console.log(dummyData);
  return (
    <div>
      <div className="top flex flex-col sm:flex-row items-center px-4 py-4 gap-2">
        {/* Search Bar */}
        <div className="search-bar flex">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              const filtered = resList.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );

              setFilteredData(filtered);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Filter Button */}
        <div className="filter">
          <button
            className="filter-btn bg-orange-400 text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => {
              const filtered = filteredData.filter(
                (item) => item.info.avgRating >= 4.3
              );
              setFilteredData(filtered);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>

      {/* realTime data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-16 py-8">
        {filteredData.map((item) => {
          return (
            <Link
              to={"/restaurant/" + item.info.id}
              key={item.info.id}
              className="res-card-link"
            >
              {console.log(item.info)}
              {(item.info.promoted) ? (<RestaurantCardPromoted resData={item} />) :
                (<RestaurantCard resData={item} />)}
            </Link>
          );
        })}
      </div>

      {/* dummy data */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-16 py-8">
        {dummyData.map((item) => {
          return (
            <Link
              to={"/restaurant/" + item.info.id}
              key={item.info.id}
              className="res-card-link"
            >
              {console.log(item.info)}
              {item.info.promoted ? (
                <RestaurantCardPromoted resData={item} />
              ) : (
                <RestaurantCard resData={item} />
              )}
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};

export default Body;
