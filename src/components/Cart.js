import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + (item.price || 0);
    }, 0);

    setTotal(totalPrice);
  }, [cartItems]);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
  <div className="cart-page">
    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your cart is empty!</h2>
        <p>
          Looks like you haven't added anything to your cart yet.
          Explore our menu and find something delicious.
        </p>
        <button
          className="continue-shopping-btn"
          onClick={() => window.history.back()}
        >
          ← Explore Menu
        </button>
      </div>
    ) : (
      <div className="cart-container">
        <div className="cart-header">
          <div>
            <h1>Your Cart</h1>
            <p>Review your items before placing your order.</p>
          </div>
          <span className="cart-items-count">{cartItems.length} Items</span>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-section-heading">
              <h2>Order Items</h2>
              <button className="clear-cart-btn" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={CDN_URL + item.imageId}
                  alt="Margherita Pizza"
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <span className={item.isVeg ? "veg-label" : "non-veg-label"}>
                    <span
                      className={item.isVeg ? "veg-dot" : "non-veg-dot"}
                    ></span>
                    {item.isVeg ? "Veg" : "Non-Veg"}
                  </span>
                  <button className="remove-item-btn">Remove</button>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button aria-label="Decrease quantity">−</button>
                    <span>1</span>
                    <button aria-label="Increase quantity">+</button>
                  </div>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
              </div>
            ))}

            <button className="continue-shopping-btn">
              ← Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="summary-total">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout →</button>

            <p className="secure-checkout">🔒 Safe and secure checkout</p>
          </aside>
        </div>
      </div>
    )}
    </div>
  );
}

export default Cart;
