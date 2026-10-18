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

    setResList(json.recipes);
    setFilteredList(json.recipes);
  };

  return { resList, filteredList, setFilteredList };
};

export default useRestaurantList;
