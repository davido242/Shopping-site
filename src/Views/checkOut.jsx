import React from "react";
import { useSelector } from "react-redux";
import {useDisclosure} from '@chakra-ui/react'
import { ModalBox} from "../Component/modal";

export default function CheckOut() {
  const state = useSelector((state) => state.productReducer);

  const priceTotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.cartQty,
    0
  );

  const cartTotal = state.cart.reduce((sum, item) => sum + item.cartQty, 0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="bg-slate-100 h-min">
      <ModalBox isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <div className=" ">
        <div className="text-white">CHECKOUT</div>
      </div>

      <div className="flex justify-center space-x-6 pl-20">
        <div className="h-[45%] w-[50%] bg-white mt-2  text-sm font-medium ">
          <div>
            <div className="flex space-x-[64%] pt-4 pb-2 ml-12">
              <div>
                <div>
                  {" "}
                  <input type="radio" /> 1. ADDRESS DETAILS
                </div>
              </div>
              <div>
                <div className="text-orange-500">CHANGE</div>
              </div>
            </div>

            <hr className="w-[100%] mt-2"></hr>
            <div className="mt-4 ml-12">
              <div>Ibini Chinasa Joy</div>
              <div className="text-slate-400 text-xs pb-4">
                <div>
                  Opposite living faith church gishiri, Abuja, NICON JUNCTION,
                  Federal Capital Territory
                </div>
                <div>+2348109771480</div>
              </div>
            </div>
          </div>
          <hr className="w-[100%] border-4 "></hr>
          <div className="mt-4 pl-12">
            <input type="radio" /> 2. DELIVERY METHOD
          </div>
          <hr className="w-[100%] mt-2"></hr>
          <div className="pl-12">
            <div className="mt-6 mb-6">
              <div>How do you want your order delivered?</div>
            </div>
            <div className="pl-6">
              <div>
                <input type="radio" /> Pickup Station (Cheaper Shipping Fees
                than Door Delivery)
              </div>
            </div>
            <div className="pl-8 mb-6">
              <div className="text-xs">
                <span className="text-slate-400">
                  Arriving at pickup station between
                </span>{" "}
                Wednesday 29 Mar to Wednesday 19 Apr{" "}
                <span className="text-slate-400">
                  with cheaper shipping fees
                </span>
              </div>
            </div>
            <div className="border-2 border-slate-100 w-[90%] pl-8 items-center text-xs">
              <div className="mt-2">Select pick-up station to enjoy</div>
              <div className="mb-6">
                - Free delivery on thousands of products in Lagos, Ibadan &
                Abuja
              </div>
              <div className="mb-6">
                - Scheduled pickup at your own convenience
              </div>
              <div className="mb-6">
                - Large items (e.g. Freezers) may arrive 2 business days later
                than other products.
              </div>
              <div className="mb-4">
                Please note that payment must be made before the package can be
                opened and delivery agents are not allowed to open a package.
                Free return within 15 days for Official Store items and 7 days
                for other eligible items,{" "}
                <span className="text-orange-400">
                  please right click here!
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 pl-12">
            <div className="text-orange-500">SELECT PICKUP STATION</div>
          </div>

          <hr className="w-[100%] mt-2"></hr>
          <div className="pl-12">
            <div className="pl-6 mt-4 mb-4">
              <div>
                {" "}
                <input type="radio"/> 
                {" "}
                Door Delivery
              </div>
              <div>
                <span className="text-slate-400"> Delivered between</span>{" "}
                Wednesday 29 Mar <span className="text-slate-400">and</span>{" "}
                Wednesday 19 Apr <span className="text-slate-400">for</span> ₦
                2,240
              </div>
            </div>
            <div className="border-2 border-slate-100 w-[90%] pl-8 items-center text-xs ">
              <div className="mt-2 mb-6">
                - Free delivery on thousands of products in Lagos, Ibadan &
                Abuja
              </div>
              <div className="mb-6">
                - Large items (e.g. Freezers) may arrive 2 business days later
                than other products.
              </div>
              <div className="mb-6">
                -Ensure your address is current as Delivery Agents would only
                deliver to the stated address.
              </div>
              <div className="mb-6">
                -Package may arrive before the delivery date. Payment must be
                made before collection as Delivery agents are not allowed to
                open a package
              </div>
              <div className="mb-6">
                - On delivery day, delivery time may vary due to possible
                eventualities.
              </div>
              <div className="mb-6">
                - Free return within 15 days for Official Store items and 7 days
                for other eligible items,{" "}
                <span className="text-orange-400">
                  please right click here!
                </span>
              </div>
            </div>
            <div className=" ml-4 mr-4 mb-8 pt-8 text-xs font-bold text-white">
              <button onClick={onOpen}
              className="shadow shadow-slate-300 border-none bg-orange-400 h-14 w-[80%]">
                PROCEED TO NEXT STEP
              </button>
            </div>
          </div>
        </div>





        <div className="bg-white h-fit mt-6 w-[20%] ">
          <div className="mt-2 mb-2 pl-4 text-sm font-medium">
            YOUR ORDER ({cartTotal} Items)
          </div>
          <hr className="w=[100%]"></hr>
          {state.cart.map((eachItem) => (
            <div className="pl-4 mt-2 text-xs font-medium" key={eachItem.id}>
              <img
                className="w-20 h-20"
                src={eachItem.image}
                alt="imgages"
              ></img>
              <div>{eachItem.name}</div>
              <span className="text-orange-400">₦ {eachItem.price}</span>
              <div className="mb-2">Qty: {eachItem.cartQty}</div>
              <hr></hr>
            </div>
          ))}
          <div>
            <div className="text-sm pl-4">
              <div className="flex mb-2 space-x-[58%]">
                <div>SubTotal</div>
                <div>₦{priceTotal}</div>
              </div>
              <div className="flex mb-2 space-x-[50%]">
                <div>Delivery fee</div>
                <div className="font-bold">₦2500</div>
              </div>
              <div className="flex mb-2">
                <div>International shipping and customs fees</div>
                <div></div>
                <div className="mr-2 font-bold">₦2000</div>
              </div>
            </div>
            <hr></hr>
            <div className="flex space-x-[64%] text-sm pl-4 mt-2 mb-2">
              <div className="font-bold">Total</div>
              <span className="text-orange-400 text-base ">₦{priceTotal}</span>
            </div>
          </div>
          <hr className="w-[100%]"></hr>
          <div className="text-orange-400 mt-4 mb-4 pl-16 text-sm font-bold">
            <div>MODIFY CART</div>
          </div>
          <hr className="w-[100%] border-4 "></hr>
          <div className=" text-sm font-bold pt-4 pb-4 ml-2">
            <div>NEED HELP?</div>
          </div>
          <hr className="w-[100%]"></hr>
          <div className="pb-3">
            <div className="text-sm pt-4 pb-4 ml-2">
              <div>Contact an expert to support you</div>
            </div>
            <div className=" ml-2 mr-2 text-xs font-bold text-orange-400">
              <button className="shadow shadow-slate-300 h-10 w-64">
                LIVE CHAT
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
