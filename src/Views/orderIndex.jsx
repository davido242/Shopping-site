import React from "react";
import { GrCart } from "react-icons/gr";

export default function OrderIndex() {
  return (
    <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center">
      <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%]">
        <div className="h-12 flex items-center text-xl font-medium ml-4">
          Orders
        </div>
        <hr className="w-[100%]"></hr>
        <div className="h-12 flex space-x-10 items-center text-sm ml-6">
          <div className="text-orange-400">OPEN ORDERS (0)</div>
          <div className="text-gray-500">CLOSED ORDERS (4)</div>
        </div>
        <hr className="w-[100%]"></hr>
        <div className="flex justify-center items-center h-[70%]">
          <div className="flex flex-col justify-center items-center h-80 w-[50%] space-y-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full flex justify-center items-center">
              <GrCart className="h-16 w-16" />
            </div>
            <div className="text-base font-base">
              You have placed no orders yet!
            </div>
            <div className="text-sm ml-4 text-center">
              All your orders will be saved here for you to access their state
              anytime.
            </div>
            <div className="flex items-center">
              <button className="text-sm bg-orange-400 h-12 w-44 rounded text-white">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
