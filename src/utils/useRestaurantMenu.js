import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const ITEM_CATEGORY_TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(MENU_API + resId);

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "Restaurant not found"
              : "Failed to fetch menu",
          );
        }

        const json = await response.json();

        // Same paths as the real Swiggy menu API response
        setResInfo(json?.data?.cards[2]?.card?.card?.info);

        // Keep only the menu categories (skips banners, licence info etc.)
        const menuCategories =
          json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.["@type"] === ITEM_CATEGORY_TYPE,
          ) ?? [];

        setCategories(menuCategories);
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

  return { resInfo, categories, loading, error };
};

export default useRestaurantMenu;
