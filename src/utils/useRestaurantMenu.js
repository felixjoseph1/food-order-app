import {useState,useEffect} from 'react';

const useRestaurantMenu = (id) => {
    const [restaurantName, setrestaurantName] = useState("");
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
      const data = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0849557&lng=80.2101342&restaurantId=" +
          id +
          "&submitAction=ENTER"
      );
      const json = await data.json();
      //console.log(json);
      const categories =
          json?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      console.log(categories);
        setCategories(categories);
      setrestaurantName(json?.data.cards[0]?.card?.card?.text);
    }

    return {restaurantName,categories};
}

export default useRestaurantMenu;