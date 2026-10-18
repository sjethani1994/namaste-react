const RestaurantCard = (props) => {
  const { name, cuisine, rating, cookTimeMinutes, mealType, image } =
    props.resData;
  return (
    <div className="h-full min-h-[280px] cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
      <img className="block h-[200px] w-full object-cover" src={image} alt={name} />

      <div className="px-[18px] py-[15px]">
        <h3 className="mb-2 text-xl font-bold text-[#222]">{name}</h3>
        <p className="my-1.5 text-sm text-[#666]">{cuisine}</p>
        <p className="my-1.5 text-sm text-[#666]">
          ⭐ {rating} • {cookTimeMinutes + 15} mins
        </p>
        <p className="my-1.5 text-sm text-[#666]">{mealType.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
