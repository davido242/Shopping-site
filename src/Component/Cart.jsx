import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  console.log(state.cart, "hggggggg");

  const cartTotal = state.cart.reduce((sum, item) => sum + item.cartQty, 0);
  console.log(cartTotal, "ooooooooooooooooo");

  return (
    <div className=" w-32 h-12 flex items-center relative gap-x-4">
      <button>
        <Link to={"/cartitems"}>
          <GrCart className="h-4 w-4" />
        </Link>
      </button>
      <div className="bg-orange-400 rounded-full w-4 h-4 text-xs text-white flex justify-center absolute bottom-5 left-2">
        {cartTotal}
      </div>
      <div className="font-medium">Cart</div>
    </div>
  );
};

export default Cart;
