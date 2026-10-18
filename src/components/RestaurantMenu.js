import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../styles/RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, menuItems, loading, error } = useRestaurantMenu(resId);

  // Show shimmer while API calls are running
  if (loading) return <Shimmer />;

  // Show error if API calls fail
  if (error) {
    return (
      <div className="menu-error">
        <h2>Oops! Something went wrong.</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  const { name, cuisine, rating, reviewCount, cookTimeMinutes, image } =
    resInfo;

  return (
    <main className="restaurant-menu-page">
      <section className="menu-restaurant-header">
        <div className="restaurant-initial">
          <img src={`${image}`} alt={image} className="menu-item-image" />
        </div>

        <div className="restaurant-heading">
          <span className="menu-eyebrow">RESTAURANT DETAILS</span>
          <h1>{name}</h1>
          <p className="restaurant-cuisine">{cuisine}</p>

          <div className="restaurant-meta">
            <span className="rating-badge">★ {rating}</span>
            <span className="meta-text">{reviewCount} ratings</span>
            <span className="meta-dot">•</span>
            <span className="delivery-time">{cookTimeMinutes + 15} mins</span>
          </div>
        </div>
      </section>

      <div className="menu-section-divider">
        <span>OUR MENU</span>
      </div>

      <section className="menu-content">
        <div className="menu-section-heading">
          <div>
            <h2>Popular dishes</h2>
            <p>Explore something delicious today</p>
          </div>
          <span className="menu-count">{menuItems?.length} items</span>
        </div>

        {menuItems?.length === 0 ? (
          <div className="empty-menu">
            <span className="empty-menu-icon">🍽</span>
            <h3>No dishes available</h3>
            <p>Please check back later for the menu.</p>
          </div>
        ) : (
          <div className="menu-list">
            {menuItems?.map((item) => (
              <article className="menu-item" key={item.idMeal}>
                <div className="menu-item-info">
                  <span className="veg-indicator">
                    <span />
                  </span>

                  <h3>{item.strMeal}</h3>

                  <p className="menu-item-price">
                    ₹{(Number(item.idMeal) % 300) + 99}
                  </p>

                  <p className="menu-item-description">
                    Freshly prepared with carefully selected ingredients. A
                    delicious choice for your meal.
                  </p>

                  <span className="menu-item-tag">CHEF'S SELECTION</span>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-placeholder">
                    <img
                      src={`${item.strMealThumb}/small`}
                      alt={item.strMeal}
                      className="menu-item-image"
                    />
                  </div>
                  <button
                    className="add-menu-btn"
                    type="button"
                    aria-label={`Add ${item.strMeal}`}
                  >
                    ADD <span>+</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="menu-footer">
        <span>Made with care</span>
        <span className="footer-dot">•</span>
        <span>Enjoy your meal!</span>
      </footer>
    </main>
  );
};

export default RestaurantMenu;
