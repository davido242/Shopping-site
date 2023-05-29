import React from "react";
import {
  GrUser,
  GrHome,
  GrInbox,
  GrSave,
  GrGift,
  GrTime,
  GrTicket,
} from "react-icons/gr";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="bg-white border w-72 h-[78%] mt-4 rounded-md border-4 border-green-500">
      <div className="font-normal text-sm ">
        <div className="flex h-12 items-center pl-4">
          <GrUser className="h-4 w-6" />
          <Link to='/accountoverview/account-overview'> <div>My Jumia Account</div></Link>
         
        </div>
        <div className="flex items-center h-12 hover:bg-neutral-200 pl-4">
          <GrHome className="h-4 w-6" />
          <Link to="/accountoverview/order-index"><div>Orders</div></Link>
          
        </div>
        <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
          <GrInbox className="h-4 w-6" />
          <div>Inbox</div>
        </div>
        <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
          <GrSave className="h-4 w-6" />
          <div>Pending Reviews</div>
        </div>
        <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
          <GrTicket className="h-4 w-6" />
          <div>Voucher</div>
        </div>
        <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
          <GrGift className="h-4 w-6" />
          <div>Saved Items</div>
        </div>
        <div className="flex pb-2 h-12 items-center hover:bg-neutral-200 pl-4">
          <GrTime className="h-4 w-6" />
          <div>Recently Viewed</div>
        </div>
      </div>
      <hr className="w-[100%]"></hr>
      <div className="font-normal text-sm mb-4 ">
        <div className="h-12 hover:bg-neutral-100 pl-4 flex items-center">
          Account Management
        </div>
        <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
          Address Book
        </div>
        <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
          Newsletter Preference
        </div>
        <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
          Close Account
        </div>
      </div>
      <hr className="w-[100%]"></hr>
      <div className="flex justify-center items-center text-sm text-orange-400 font-medium mt-4 mb-4">
        <div>LOGOUT</div>
      </div>
    </div>
  );
}
