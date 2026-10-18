const LOGO_URL = "https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"

// Swiggy image CDN - append a cloudinaryImageId / imageId
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Local json-server (run `npm run server`) serving real Swiggy data from db.json
const API_BASE = "http://localhost:3001";

// Same response shape as swiggy.com/dapi/restaurants/list/v5
export const RESTAURANT_LIST_API = `${API_BASE}/restaurants`;

// Same response shape as swiggy.com/dapi/menu/pl - append the restaurant id
export const MENU_API = `${API_BASE}/menus/`;

export default LOGO_URL
