import "../styles/RestaurantCard.css";

const styleCard = {
  backgroundColor: "white",
};

const RestaurantCard = (props) => {
  const { name, cuisine, rating, cookTimeMinutes, mealType, image } =
    props.resData;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="restaurant-image" src={image} alt={name} />

      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>
          ⭐ {rating} • {cookTimeMinutes + 15} mins
        </p>
        <p>{mealType.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
