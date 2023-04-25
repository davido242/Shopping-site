import React from "react";
import {
  GrAchievement,
} from "react-icons/gr";

export default function VoucherIndex() {
  return (
    <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center">
      <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%] ">
        <div className="h-12 flex items-center text-xl font-medium">
          <div className="ml-4">Pending Reviews</div>
        </div>
        <hr className="w-[100%]"></hr>

        <div className="h-12 flex space-x-10 items-center text-sm ml-6">
          <div className="text-orange-400">ACTIVE</div>
          <div className="text-gray-500">INACTIVE</div>
        </div>
        <hr className="w-[100%]"></hr>
        <div className="flex justify-center items-center h-[70%]">
          <div className="flex flex-col justify-center items-center h-80 w-[50%] space-y-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full flex justify-center items-center">
              <GrAchievement className="h-16 w-16" />
            </div>
            <div className="text-base font-medium">
              You currently have no available Voucher
            </div>
            <div className="text-sm ml-4">
              All your available Vouchers will be displayed here
            </div>
            <div className="flex items-center ">
              <button className="text-sm bg-orange-400 h-12 w-48 font-semibold rounded text-white">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
