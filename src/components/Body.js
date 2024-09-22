import { resList as restaurantList } from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import '../../index.css';
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {
    const [resList,setresList] = useState([]); //use restaurantList for initial state 
    const [filteredData,setFilteredData] = useState([]);
    const [search,setsearch] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(
            // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%20Read'
            'https://www.swiggy.com/mapi/homepage/getCards?lat=13.0849557&lng=80.2101342'
            
        );
        
        const resData=await data.json();
        // console.log(resData);
        // console.log(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setresList(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredData(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(resData);
        console.log(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setresList(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(resData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }


    return (!resList||resList.length===0)? (<Shimmer />) : 
    
        (<div>   

            <div className="top">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants" value={search} onChange={(e)=>{
                    setsearch(e.target.value);
                    const filtered = resList.filter((item)=>
                        item.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                    );
    
                    setFilteredData(filtered);
                }}/>
                {/* <button onClick={()=>{
                    // const filteredData = resData.filter((item)=>
                    //     item.info.name.toLowerCase().includes(search.toLowerCase())
                    // );
                    // setresList(filteredData);
                    console.log(filteredData);
                }}>Search</button> */}
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filtered = filteredData.filter((item) => item.info.avgRating >=4.3);
                    setFilteredData(filtered);
                }}>Top rated restaurants</button>
                
            </div>

            </div>
            
            <div className='res-card-container'>
                {filteredData.map((item) => {
                    return <RestaurantCard key={item.info.id} resData={item} />
                })}    
            </div>
        </div>
    );
}

export default Body;