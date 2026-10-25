import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-t border-[#eeeef1]">
      {items.map((itemCard) => {
        const { id, name, price, defaultPrice, description, imageId, isVeg } =
          itemCard.card.info;

        return (
          <article
            className="flex items-center justify-between gap-3 border-b border-[#eeeef1] px-3.5 py-5 transition-colors last:border-b-0 hover:bg-[#fffaf6] sm:gap-6 sm:p-6"
            key={id}
          >
            <div className="min-w-0 pl-[15px]">
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

              {/* Swiggy prices are in paise, so divide by 100 */}
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
                onClick={() => handleAddItem(itemCard.card.info)}
              >
                ADD <span className="text-base">+</span>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ItemList;
