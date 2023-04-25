import React from "react";
import {
  GrAchievement,
} from "react-icons/gr";

export default function PendingReviewsIndex() {
  return (
    <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center">
      <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%] ">
        <div className="h-12 flex items-center text-xl font-medium">
          <div className="ml-4">Pending Reviews</div>
        </div>
        <hr className="w-[100%]"></hr>
        <div className="flex justify-center items-center h-[70%]">
          <div className="flex flex-col justify-center items-center h-80 w-[50%] space-y-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full flex justify-center items-center">
              <GrAchievement className="h-16 w-16" />
            </div>
            <div className="text-base font-medium">
              You have no orders waiting for feedback
            </div>
            <div className="text-sm ml-4 text-center">
              After getting your products delivered, you will be able to rate
              and review them. Your feedback will be published on the product
              page to help all Jumia's users get the best shopping experience!
            </div>
            <div className="flex items-center ">
              <button className="text-sm bg-orange-400 h-12 w-48 rounded text-white">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
