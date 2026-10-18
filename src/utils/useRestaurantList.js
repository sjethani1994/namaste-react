import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    // Same path as the real Swiggy API response
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    setResList(restaurants);
    setFilteredList(restaurants);
  };

  return { resList, filteredList, setFilteredList };
};

export default useRestaurantList;
