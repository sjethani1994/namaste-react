import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, menuItems, loading, error } = useRestaurantMenu(resId);

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

  const { name, cuisine, rating, reviewCount, cookTimeMinutes, image } =
    resInfo;

  return (
    <div className="mx-auto w-full max-w-[900px] px-3.5 pt-5 pb-10 text-[#282c3f] sm:px-5 sm:pt-7">
      <section className="flex flex-col items-start gap-4 rounded-[15px] border border-[#f0f0f3] bg-linear-135 from-[#fffaf5] to-white to-70% px-4 py-5 shadow-[0_8px_28px_rgba(40,44,63,0.045)] min-[381px]:flex-row sm:items-center sm:gap-6 sm:rounded-[20px] sm:p-[30px]">
        <div className="flex size-[58px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-[#fff0e5] sm:size-[94px] sm:rounded-[22px]">
          <img src={image} alt={name} className="block size-full object-cover" />
        </div>

        <div className="min-w-0">
          <span className="text-[10px] font-extrabold tracking-[2px] text-[#e85d04]">
            RESTAURANT DETAILS
          </span>
          <h1 className="my-2 text-[23px] font-extrabold tracking-[-1px] wrap-anywhere text-[#202333] sm:text-[clamp(24px,4vw,34px)]">
            {name}
          </h1>
          <p className="text-sm leading-[1.6] text-[#777987]">{cuisine}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[7px] bg-[#e5f6e9] px-2.5 py-1.5 text-xs font-extrabold text-[#187b3e]">
              ★ {rating}
            </span>
            <span className="text-xs font-semibold text-[#525565]">
              {reviewCount} ratings
            </span>
            <span className="text-[#b6b7be]">•</span>
            <span className="text-xs font-semibold text-[#525565]">
              {cookTimeMinutes + 15} mins
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
              Popular dishes
            </h2>
            <p className="mt-[7px] text-[13px] text-[#858793]">
              Explore something delicious today
            </p>
          </div>
          <span className="shrink-0 rounded-lg border border-[#f0e0d4] bg-[#fff8f2] px-3 py-2 text-xs font-bold text-[#d95500]">
            {menuItems?.length} items
          </span>
        </div>

        {menuItems?.length === 0 ? (
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
          <div className="overflow-hidden rounded-2xl border border-[#ededf0] bg-white">
            {menuItems?.map((item) => (
              <article
                className="flex items-center justify-between gap-3 border-b border-[#eeeef1] px-3.5 py-5 transition-colors last:border-b-0 hover:bg-[#fffaf6] sm:gap-6 sm:p-6"
                key={item.idMeal}
              >
                <div className="min-w-0 pl-[15px]">
                  <span className="mb-3 flex size-4 items-center justify-center rounded-[3px] border-[1.5px] border-[#198754]">
                    <span className="size-[7px] rounded-full bg-[#198754]" />
                  </span>

                  <h3 className="mb-2.5 text-[15px] leading-[1.45] font-bold wrap-anywhere text-[#252839] sm:text-[17px]">
                    {item.strMeal}
                  </h3>

                  <p className="mb-2.5 text-sm font-bold text-[#303344]">
                    ₹{(Number(item.idMeal) % 300) + 99}
                  </p>

                  <p className="max-w-[480px] text-[11px] leading-[1.8] text-[#858793] sm:text-xs">
                    Freshly prepared with carefully selected ingredients. A
                    delicious choice for your meal.
                  </p>

                  <span className="mt-3.5 inline-block text-[9px] font-extrabold tracking-[1.2px] text-[#d95500]">
                    CHEF'S SELECTION
                  </span>
                </div>

                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex size-[65px] items-center justify-center overflow-hidden rounded-xl bg-linear-135 from-[#fff0e5] to-[#ffe0c6] min-[381px]:h-[72px] min-[381px]:w-[76px] sm:h-[90px] sm:w-[104px]">
                    <img
                      src={`${item.strMealThumb}/small`}
                      alt={item.strMeal}
                      className="block size-full object-cover"
                    />
                  </div>
                  <button
                    className="relative -mt-3 flex min-w-[76px] cursor-pointer items-center justify-center gap-[7px] rounded-lg border border-[#e6e6e9] bg-white px-[13px] py-[9px] text-xs font-extrabold text-[#198754] shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-colors hover:border-[#198754] hover:bg-[#f2fff6] sm:min-w-[90px] sm:gap-3"
                    type="button"
                    aria-label={`Add ${item.strMeal}`}
                  >
                    ADD <span className="text-base">+</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-[30px] flex justify-center gap-[9px] text-xs text-[#999ba4]">
        <span>Made with care</span>
        <span className="text-[#e85d04]">•</span>
        <span>Enjoy your meal!</span>
      </footer>
    </div>
  );
};

export default RestaurantMenu;
