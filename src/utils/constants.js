const LOGO_URL = "https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Restaurant list + details (DummyJSON recipes)
export const RESTAURANT_LIST_API = "https://dummyjson.com/recipes?limit=0";
export const RESTAURANT_DETAILS_API = "https://dummyjson.com/recipes/";

// Menu items (TheMealDB) - append the cuisine, e.g. "Italian"
export const MENU_BY_CUISINE_API =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
// Used when TheMealDB has no dishes for a cuisine
export const MENU_FALLBACK_API =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

export default LOGO_URL
