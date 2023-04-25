import { Action } from "@remix-run/router";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts, removeItem, removeProducts } from "../action/cartAction";
import { Link } from "react-router-dom";
import NavBar from "../Component/NavBar";

export default function CartItems() {
  const state = useSelector((state) => state.productReducer);
  console.log(state.cart, "ttttttt");

  const dispatch = useDispatch();

  const priceTotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0
  );

  const cartTotal = state.cart.reduce((sum, item) => sum + item.cartQty, 0);

  return (
    <div className=" bg-gray-50 pt-8">
      <div >
        <NavBar/>
      </div>
      <div
      style={{   
        display: "flex",
        columnGap: "20px",
        justifyContent: "center",
        height: "1200px",
      }}
    >
      <div className="bg-white w-3/5 h-max mt-6 shadow shadow-slate-400 rounded ">
        <div className="h-10 mt-6 pl-6 text-xl">Cart ({cartTotal})</div>
        <hr className="w-full"></hr>
        {state.cart.map((eachItems) => (
          <div className=" pl-8 pt-4 h-max mr-4  " key={eachItems.id}>
            <hr className="h-full"></hr>
            <div className="flex justify-between">
              <div className="flex ">
                <img
                  className="w-20 h-20"
                  src={eachItems.image}
                  alt="imgages"
                ></img>
                <div className="mt-10">{eachItems.name}</div>
              </div>
              <div>
                <div>{eachItems.price}</div>
                <div className="line-through">{eachItems.oldPrice}</div>
              </div>
            </div>
            <div className="flex justify-between ">
              <button
                className="text-red-600"
                onClick={() => {
                  console.log("jjjjjjjjjeeieiie");
                  dispatch(removeProducts(eachItems.id));
                }}
              >
                Remove
              </button>

              <div className="flex">
                <button
                  className="bg-orange-400 w-8 h-8 rounded text-white mr-6"
                  onClick={() => {
                    dispatch(addProducts(eachItems));
                  }}
                >
                  +
                </button>
                <div className="mr-8">{eachItems.cartQty}</div>
                <button
                  className="bg-orange-500 w-8 h-8 rounded text-white "
                  onClick={() => {
                    if (eachItems.cartQty <= 1) {
                      dispatch(removeProducts(eachItems.id));
                    } else {
                      dispatch(removeItem(eachItems));
                    }
                    console.log(eachItems, "pppppppppp");
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white h-36 mt-6 shadow shadow-slate-400 rounded">
        <div className="w-80 mt-4 space-y-2">
          <div className="h-6 pl-4 text-sm">CART SUMMARY</div>
          <hr className="w-80"></hr>
          <div className="flex justify-between">
            <div className=" pl-4 ">subtotal</div>
            <div> ₦ {priceTotal}</div>
          </div>
          <hr className="w-80"></hr>
          <div className="bg-amber-500 w-72 h-10 pt-2 ml-4 text-white pl-4 rounded text-center">
            <Link to={"/checkout"}>CHECKOUT (₦ {priceTotal})</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
