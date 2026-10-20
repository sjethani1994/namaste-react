import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, categories, loading, error } = useRestaurantMenu(resId);

  // Lifting state up: the parent remembers which category is open,
  // so only one can be open at a time. null = all closed.
  // (Hooks must be called before any early return below.)
  const [showIndex, setShowIndex] = useState(0);

  // Show shimmer while API calls are running
  if (loading) return <Shimmer />;

  // Show error if API calls fail
  if (error) {
    return (
      <div className="mx-auto my-10 max-w-md rounded-2xl border border-[#ededf0] bg-white px-5 py-[55px] text-center">
        <h2 className="mt-4 mb-2 text-xl font-bold text-[#282c3f]">
          Oops! Something went wrong.
        </h2>
        <p className="text-sm leading-[1.7] text-[#858793]">{error}</p>
        <button
          className="mt-3 cursor-pointer rounded-lg bg-[#e85d04] px-5 py-[11px] font-bold text-white hover:bg-[#c94e00]"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla,
    areaName,
    cloudinaryImageId,
  } = resInfo;

  const totalItems = categories.reduce(
    (sum, c) => sum + c.card.card.itemCards.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-[900px] px-3.5 pt-5 pb-10 text-[#282c3f] sm:px-5 sm:pt-7">
      <section className="flex flex-col items-start gap-4 rounded-[15px] border border-[#f0f0f3] bg-linear-135 from-[#fffaf5] to-white to-70% px-4 py-5 shadow-[0_8px_28px_rgba(40,44,63,0.045)] min-[381px]:flex-row sm:items-center sm:gap-6 sm:rounded-[20px] sm:p-[30px]">
        <div className="flex size-[58px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-[#fff0e5] sm:size-[94px] sm:rounded-[22px]">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="block size-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <span className="text-[10px] font-extrabold tracking-[2px] text-[#e85d04]">
            RESTAURANT DETAILS
          </span>
          <h1 className="my-2 text-[23px] font-extrabold tracking-[-1px] wrap-anywhere text-[#202333] sm:text-[clamp(24px,4vw,34px)]">
            {name}
          </h1>
          <p className="text-sm leading-[1.6] text-[#777987]">
            {cuisines.join(", ")} • {areaName}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[7px] bg-[#e5f6e9] px-2.5 py-1.5 text-xs font-extrabold text-[#187b3e]">
              ★ {avgRatingString}
            </span>
            <span className="text-xs font-semibold text-[#525565]">
              {totalRatingsString}
            </span>
            <span className="text-[#b6b7be]">•</span>
            <span className="text-xs font-semibold text-[#525565]">
              {costForTwoMessage}
            </span>
            <span className="text-[#b6b7be]">•</span>
            <span className="text-xs font-semibold text-[#525565]">
              {sla?.slaString}
            </span>
          </div>
        </div>
      </section>

      {/* Lines on both sides of the label come from the before: and after: pseudo-elements */}
      <div className="my-[34px] flex items-center gap-3.5 text-[10px] font-extrabold tracking-[3px] text-[#a0a1aa] before:h-px before:flex-1 before:bg-[#e9e9ed] after:h-px after:flex-1 after:bg-[#e9e9ed]">
        <span>OUR MENU</span>
      </div>

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-[21px] font-extrabold tracking-[-0.7px] text-[#202333] sm:text-[25px]">
              Menu
            </h2>
            <p className="mt-[7px] text-[13px] text-[#858793]">
              {categories.length} categories
            </p>
          </div>
          <span className="shrink-0 rounded-lg border border-[#f0e0d4] bg-[#fff8f2] px-3 py-2 text-xs font-bold text-[#d95500]">
            {totalItems} items
          </span>
        </div>

        {categories.length === 0 ? (
          <div className="rounded-2xl border border-[#ededf0] bg-white px-5 py-[55px] text-center">
            <span className="text-[35px] text-[#e85d04]">🍽</span>
            <h3 className="mt-4 mb-2 text-lg font-bold text-[#282c3f]">
              No dishes available
            </h3>
            <p className="text-sm leading-[1.7] text-[#858793]">
              Please check back later for the menu.
            </p>
          </div>
        ) : (
          categories.map((category, index) => (
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              isOpen={index === showIndex}
              onToggle={() =>
                setShowIndex((prev) => (prev === index ? null : index))
              }
            />
          ))
        )}
      </section>
    </div>
  );
};

export default RestaurantMenu;
