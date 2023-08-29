import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";
import "./Cart.css";
import { addToCart } from "../../actions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState("pending");
  const [isConfirmingOrder, setIsConfirmingOrder] = useState(false);
  const [selectedDineOption, setSelectedDineOption] = useState(null);
  const [checkedOutItems, setCheckedOutItems] = useState([]);

  const deleteFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const increaseQuantity = (item) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ ...item, quantity: item.quantity - 1 }));
    }
  };

  const calculateTotal = () => {
    let total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    if (selectedDineOption === "dineIn") {
      total += total * 0.1;
    }
    if (selectedDineOption === "dineOut") {
      total += 0.5;
    }
    return total;
  };

  const confirmOrder = () => {
    setIsConfirmingOrder(true);
    setOrderStatus("preparing");
    setCheckedOutItems([...cart]);
    dispatch({ type: "CLEAR_CART" });
    setTimeout(() => {
      setOrderStatus("ready");
    }, 2000);
  };

  const isCartEmpty = cart.length === 0;

  return (
    <div className="cart-container">
      <ul
        className="cart-items"
        style={{ display: isConfirmingOrder ? "none" : "block" }}
      >
        <li>
          {" "}
          <h1 className="cart-heading">Cart has {cart.length} items</h1>
        </li>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-details">
              <img className="item-image" src={item.image} alt={item.name} />
              <div>
                <h3 className="item-name">Item: {item.name}</h3>
                <p className="item-price">Price: {item.price}$</p>
                <div className="item-quantity">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    disabled={isConfirmingOrder}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item)}
                    disabled={isConfirmingOrder}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
                {item.customization && <p>Additional: {item.customization}</p>}
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => deleteFromCart(item)}
              disabled={isConfirmingOrder}
            >
              x
            </button>
          </li>
        ))}
        <div>
          <input
            className="checkbox-container"
            type="checkbox"
            name="dineIn"
            checked={selectedDineOption === "dineIn"}
            onChange={() => setSelectedDineOption("dineIn")}
            disabled={isConfirmingOrder}
          />
          <label>Dine In </label>

          <input
            className="checkbox-container"
            type="checkbox"
            name="dineOut"
            checked={selectedDineOption === "dineOut"}
            onChange={() => setSelectedDineOption("dineOut")}
            disabled={isConfirmingOrder}
          />
          <label>Dine Out </label>
        </div>

        <li>
          {selectedDineOption && !isCartEmpty && (
            <div className="total-price">
              <p>Total Price: {calculateTotal()}$</p>
            </div>
          )}
        </li>

        <li>
          <button
            className="confirm-btn"
            onClick={confirmOrder}
            disabled={
              orderStatus !== "pending" || isCartEmpty || !selectedDineOption
            }
          >
            Confirm Order
          </button>
        </li>

      </ul>

      <ul className="cart-items">
        <li>
          <div className="order-status">
            {orderStatus === "preparing" && (
              <p className="orderP">
                Order is being prepared... <span className="loader"></span>
              </p>
            )}

            {orderStatus === "ready" && (
              <div className="checkout-items">
                <h2>Checked Out Items</h2>
                {checkedOutItems.map((item, index) => (
                  <div key={index} className="checked-out-item">

                    <div className="check-details">
                      <img
                        className="check-image"
                        src={item.image}
                        alt={item.name}
                      />
                       <div className="check-info">
                      <h3 className="check-name">{item.name}</h3>
                      <p className="check-price">Price: {item.price}$</p>
                      <p className="check-quantity">Quantity: {item.quantity} </p>
                      {item.customization && <p className="check-add">Additional: {item.customization}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
