import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { SWIGGY_API } from "../utils/constants";
import TopRestaurant from "./TopRestaurant";
import RestaurantsOnline from "./RestaurantsOnline";
import CategoriesRestaurants from "./CategoriesRestaurants";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(SWIGGY_API);
        if (!response.ok) throw new Error("Error fetching data");
        let jsonResponse = await response.json();
        setData(jsonResponse?.data?.cards || []);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      {data?.[0]?.card?.card && (
        <Categories categoriesData={data[0]?.card.card} />
      )}
     
      {data?.[1]?.card?.card && (
        <TopRestaurant topRestaurantData={data[1]?.card?.card} />
      )}
     
      {data?.[4]?.card?.card && (
        <RestaurantsOnline onlineRestaurantData={data[4]?.card?.card} title ={data[2]?.card?.card?.title}/>
      )}
    </div>
  );
};

export default Body;
