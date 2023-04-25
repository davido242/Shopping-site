import React from "react";
import { Link } from "react-router-dom";
import products from "../../products";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen pt-8">
      <div>
        <NavBar />
      </div>
      <div className="flex space-x-24 pt-6 pl-28 pr-20">
        <div className="flex gap-3 ">
          {products.map((product) => (
            <Link to={`/productDetails/${product.id}`} key={product.id}>
              {console.log(product.image)}

              <div className="shadow shadow-red-500 flex flex-col w-56">
                <img
                  className="w-30 h-30"
                  src={product.image}
                  alt="images"
                ></img>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div className="line-through "> {product.oldPrice}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
