import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products";
import { useDispatch } from "react-redux";
import { addProducts } from "../action/cartAction";
import { useSelector } from "react-redux";
import NavBar from "../Component/NavBar";

export default function ProductDetails() {
  let { productID } = useParams();

  let selectedProduct = products.filter((product) => product.id == productID);
  console.log(selectedProduct, "gggggggggg");

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  return (
    <div className="pt-8 bg-gray-50 h-screen">
      <div>
        <NavBar />
      </div>
      <div>
        <img src={`${selectedProduct[0].image}`}></img>
        <div>{selectedProduct[0].name}</div>
        <div>{selectedProduct[0].price}</div>
        <div>{selectedProduct[0].oldPrice}</div>
        <div>{selectedProduct[0].brand}</div>
        <div>{selectedProduct[0].rating}</div>
      </div>
      <div>
        <button
          className="bg-red-400"
          onClick={() => {
            dispatch(addProducts(selectedProduct[0]));
          }}
        >
          Add to Cart
        </button>
      
      </div>
    </div>
  );
}
