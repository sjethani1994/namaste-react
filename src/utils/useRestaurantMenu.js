import { useEffect, useState } from "react";
import {
  RESTAURANT_DETAILS_API,
  MENU_BY_CUISINE_API,
  MENU_FALLBACK_API,
} from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // API 1: Fetch restaurant details
        const resData = await fetch(RESTAURANT_DETAILS_API + resId);

        if (!resData.ok) {
          throw new Error("Failed to fetch restaurant details");
        }

        const resJson = await resData.json();
        setResInfo(resJson);

        // API 2: Fetch menu using the cuisine from API 1
        const menuData = await fetch(
          MENU_BY_CUISINE_API + encodeURIComponent(resJson.cuisine),
        );

        if (!menuData.ok) {
          throw new Error("Failed to fetch menu");
        }

        const menuJson = await menuData.json();

        // TheMealDB returns { meals: null } when it has no dishes for a cuisine
        if (menuJson.meals) {
          setMenuItems(menuJson.meals);
        } else {
          const fallbackData = await fetch(MENU_FALLBACK_API);
          const fallbackJson = await fallbackData.json();
          setMenuItems(fallbackJson.meals ?? []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return { resInfo, menuItems, loading, error };
};

export default useRestaurantMenu;
