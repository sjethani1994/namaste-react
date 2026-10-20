import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resList, filteredList, setFilteredList } = useRestaurantList();
  const showOnlineStatus = useOnlineStatus();

  const RestaurantCardPramoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext)

  if (showOnlineStatus === false) {
    return (
      <div className="flex min-h-full items-center justify-center bg-slate-50 px-5 py-8">
        <div className="w-full max-w-[460px] rounded-3xl border border-[#e8edf3] bg-white px-[22px] py-[30px] text-center shadow-[0_12px_40px_rgba(15,23,42,0.07)] xs:px-8 xs:py-10">
          <div className="mx-auto mb-6 flex size-22 items-center justify-center rounded-full bg-[#fff1f0] text-[42px]">
            📡
          </div>

          <span className="inline-block rounded-full bg-red-50 px-3 py-[7px] text-[11px] font-bold tracking-[1.2px] text-red-600">
            CONNECTION LOST
          </span>

          <h1 className="mt-[18px] mb-3 text-2xl font-bold text-[#172033] xs:text-[28px]">
            Oops! You're offline
          </h1>

          <p className="text-[15px] leading-[1.7] text-slate-500">
            It looks like your internet connection is unavailable. Please check
            your network and try again.
          </p>

          <div className="my-[26px] flex flex-col gap-3 rounded-xl bg-slate-50 p-[18px] text-left text-[13px] leading-normal text-slate-600">
            <span>✓ Check your Wi-Fi or mobile data</span>
            <span>✓ Make sure airplane mode is off</span>
          </div>

          <button
            className="w-full cursor-pointer rounded-xl bg-orange-600 px-5 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-orange-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-300"
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
    <div className="min-h-full bg-[#fafafa] px-4 py-[30px] xs:px-8 md:px-[50px]">
      <div className="mb-[25px] flex flex-col items-stretch gap-4 xs:flex-row xs:flex-wrap xs:items-center">
        <div className="flex w-full items-center rounded-xl border border-gray-200 bg-white p-[5px] shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition focus-within:border-brand focus-within:shadow-[0_0_0_3px_rgba(255,82,0,0.12)] xs:w-[380px] xs:max-w-full">
          <input
            type="text"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[15px] text-[#222] outline-none placeholder:text-[#999]"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="cursor-pointer rounded-[9px] bg-brand px-4 py-[11px] text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-brand-dark active:translate-y-0"
            onClick={() => {
              const filterList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredList(filterList);
            }}
          >
            🔍 Search
          </button>
        </div>

        <button
          className="cursor-pointer self-start rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition duration-250 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-[#fff4ed] hover:text-orange-600 hover:shadow-[0_4px_12px_rgba(234,88,12,0.15)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-500/35 active:translate-y-0 xs:self-auto"
          onClick={() => {
            setFilteredList(resList.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          ⭐ Top Rated Restaurants
        </button>

        <div className="flex w-full items-center rounded-xl border border-gray-200 bg-white p-[5px] shadow-[0_2px_6px_rgba(0,0,0,0.05)] transition focus-within:border-brand focus-within:shadow-[0_0_0_3px_rgba(255,82,0,0.12)] xs:w-[380px] xs:max-w-full">
          <input
            type="text"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[15px] text-[#222] outline-none placeholder:text-[#999]"
            placeholder="Add username ..."
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[25px] py-5">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="block h-full"
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPramoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
