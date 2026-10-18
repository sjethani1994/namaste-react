import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, categories, loading, error } = useRestaurantMenu(resId);

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
          // Episode 11: turn each category into an accordion (one open at a time)
          categories.map((category) => {
            const { title, itemCards } = category.card.card;

            return (
              <div key={title} className="mb-6">
                <h3 className="mb-3 text-lg font-extrabold text-[#202333]">
                  {title} ({itemCards.length})
                </h3>

                <div className="overflow-hidden rounded-2xl border border-[#ededf0] bg-white">
                  {itemCards.map((itemCard) => {
                    const { id, name, price, defaultPrice, description, imageId, isVeg } =
                      itemCard.card.info;

                    return (
                      <article
                        className="flex items-center justify-between gap-3 border-b border-[#eeeef1] px-3.5 py-5 transition-colors last:border-b-0 hover:bg-[#fffaf6] sm:gap-6 sm:p-6"
                        key={id}
                      >
                        <div className="min-w-0 pl-[15px]">
                          {/* Swiggy prices are in paise, so divide by 100 */}
                          <span
                            className={`mb-3 flex size-4 items-center justify-center rounded-[3px] border-[1.5px] ${
                              isVeg ? "border-[#198754]" : "border-[#e43b4f]"
                            }`}
                          >
                            <span
                              className={`size-[7px] rounded-full ${
                                isVeg ? "bg-[#198754]" : "bg-[#e43b4f]"
                              }`}
                            />
                          </span>

                          <h4 className="mb-2.5 text-[15px] leading-[1.45] font-bold wrap-anywhere text-[#252839] sm:text-[17px]">
                            {name}
                          </h4>

                          <p className="mb-2.5 text-sm font-bold text-[#303344]">
                            ₹{(price ?? defaultPrice) / 100}
                          </p>

                          {description && (
                            <p className="max-w-[480px] text-[11px] leading-[1.8] text-[#858793] sm:text-xs">
                              {description}
                            </p>
                          )}
                        </div>

                        <div className="flex shrink-0 flex-col items-center">
                          <div className="flex size-[65px] items-center justify-center overflow-hidden rounded-xl bg-linear-135 from-[#fff0e5] to-[#ffe0c6] text-2xl min-[381px]:h-[72px] min-[381px]:w-[76px] sm:h-[90px] sm:w-[104px]">
                            {imageId ? (
                              <img
                                src={CDN_URL + imageId}
                                alt={name}
                                className="block size-full object-cover"
                              />
                            ) : (
                              "🍽"
                            )}
                          </div>
                          <button
                            className="relative -mt-3 flex min-w-[76px] cursor-pointer items-center justify-center gap-[7px] rounded-lg border border-[#e6e6e9] bg-white px-[13px] py-[9px] text-xs font-extrabold text-[#198754] shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-colors hover:border-[#198754] hover:bg-[#f2fff6] sm:min-w-[90px] sm:gap-3"
                            type="button"
                            aria-label={`Add ${name}`}
                          >
                            ADD <span className="text-base">+</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default RestaurantMenu;
