import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}

      <h2>Total Cart: ${total}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}

export default CartItem;