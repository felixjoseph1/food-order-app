import {useState,useEffect} from 'react';

const useRestaurantMenu = (id) => {
    const[menuItems,setmenuItems]=useState([]);
    const[restaurantName,setrestaurantName]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(
            'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0849557&lng=80.2101342&restaurantId='+id+'&submitAction=ENTER'
        );
        const json=await data.json();
        setmenuItems(json?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
        console.log(menuItems);
        setrestaurantName(json?.data.cards[0]?.card?.card?.text);
    }

    return {menuItems,restaurantName};
}

export default useRestaurantMenu;