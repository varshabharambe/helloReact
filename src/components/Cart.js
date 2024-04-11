import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCartClick = () =>{
    console.log("hello");
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="mx-auto w-6/12">
        <button 
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCartClick}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
