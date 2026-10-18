import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
      <img
        className="block h-[200px] w-full shrink-0 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="px-[18px] py-[15px]">
        {/* truncate = one line with "..." so every card has the same height */}
        <h3 className="mb-2 truncate text-xl font-bold text-[#222]" title={name}>
          {name}
        </h3>
        <p className="my-1.5 truncate text-sm text-[#666]" title={cuisines.join(", ")}>
          {cuisines.join(", ")}
        </p>
        <p className="my-1.5 text-sm text-[#666]">
          ⭐ {avgRating} • {sla?.slaString}
        </p>
        <p className="my-1.5 text-sm text-[#666]">{costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative h-full">
        {/* Promoted Label */}
        <span
          className="
            absolute -left-1.5 top-3 z-10
            inline-flex items-center gap-1.5
            rounded-r-lg bg-gradient-to-r
            from-orange-600 to-orange-500
            px-3 py-1.5
            text-[11px] font-extrabold tracking-wider
            text-white shadow-lg
          "
        >
          <span className="text-[13px]">★</span>
          PROMOTED

          {/* Bottom ribbon corner */}
          <span
            className="
              absolute -bottom-1.5 left-0
              h-0 w-0
              border-l-[6px] border-l-transparent
              border-t-[6px] border-t-orange-800
            "
          />
        </span>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
