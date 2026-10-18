import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../styles/Body.css";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resList, filteredList, setFilteredList } = useRestaurantList();
  const showOnlineStatus = useOnlineStatus();

  if (showOnlineStatus === false) {
    return (
      <div className="offline-page">
        <div className="offline-card">
          <div className="offline-icon">📡</div>

          <span className="offline-badge">CONNECTION LOST</span>

          <h1>Oops! You're offline</h1>

          <p>
            It looks like your internet connection is unavailable. Please check
            your network and try again.
          </p>

          <div className="offline-tips">
            <span>✓ Check your Wi-Fi or mobile data</span>
            <span>✓ Make sure airplane mode is off</span>
          </div>

          <button
            className="offline-retry-btn"
            onClick={() => window.location.reload()}
          >
            ↻ Try Again
          </button>
        </div>
      </div>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filterList = resList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredList(filterList);
            }}
          >
            🔍 Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(resList.filter((res) => res.rating > 4.5));
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="res-link"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
