import React from "react";
import {
  GrApple,
  GrBaby,
  GrBrush,
  GrCar,
  GrCircleQuestion,
  GrCloudComputer,
  GrCpu,
  GrGamepad,
  GrGift,
  GrHome,
  GrInbox,
  GrLounge,
  GrMenu,
  GrPhone,
  GrSave,
  GrSearch,
  GrSign,
  GrUser,
  GrUserExpert,
} from "react-icons/gr";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import Image from "./Image";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  //   const [color, setColor] =useState("red")

  // function MouseOver() {
  //   setDropDown(true);
  // }

  // function MouseOut() {
  //   setDropDown(false);
  // }

  return (
    <div className="bg-white  w-[100%] h-24 flex justify-center items-center space-x-6 pl-20 pr-20 ">
      <div className=" relative">
        <GrMenu
          className="h-6 w-6"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        />

        {dropDown && (
          <>
            <div
              className="text-xs w-52 h-96 space-y-4 absolute top-10 bg-white rounded shadow shadow-black pt-2 pl-2 "
              // style={{clipPath: `polygon(0 6%, 4% 3%, 7% 0, 10% 5%, 100% 5%, 100% 100%, 0 100%)`}}
            >
              <div className="flex space-x-2 pt-2">
                <GrApple />
                <div>Supermarket</div>
              </div>
              <div className="flex space-x-2">
                <GrBrush />
                <div>Health & Beauty</div>
              </div>
              <div className="flex space-x-2">
                <GrHome />
                <div>Home & Office</div>
              </div>
              <div className="flex space-x-2">
                <GrPhone />
                <div>Phones and Tablets</div>
              </div>
              <div className="flex space-x-2">
                <GrCloudComputer />
                <div>Computing</div>
              </div>
              <div className="flex space-x-2">
                <GrCpu />
                <div>Electronics</div>
              </div>
              <div className="flex space-x-2">
                <GrBaby />
                <div>Baby Products</div>
              </div>
              <div className="flex space-x-2">
                <GrGamepad />
                <div>Gaming</div>
              </div>
              <div className="flex space-x-2">
                <GrLounge />
                <div>Sporting Goods</div>
              </div>
              <div className="flex space-x-2">
                <GrCar />
                <div>Automobile</div>
              </div>
              <div className="flex space-x-2">
                <GrSign />
                <div>Other Categories</div>
              </div>
            </div>
          </>
        )}
      </div>
      <Link to="/">
        <Image width="120" height="120" imageUrl="/src/assets/jumia2.png" alt="jumailogo"/>
      </Link>
      <div className="w-[40%] h-12 border border-black flex items-center rounded">
        <GrSearch className="ml-2" />
        <input
          className="outline outline-offset-2 outline-0 w-96 ml-2"
          type="text"
          placeholder="Search products, brands and cateogries"
        ></input>
      </div>
      <div>
        {" "}
        <button className=" h-10 w-24 bg-orange-400 text-white rounded text-sm">
          SEARCH
        </button>
      </div>
      <div className="flex items-center">
        <div
          className=" w-32 flex space-x-2 relative"
          onClick={() => {
            setUserDropDown(!userDropDown);
          }}
        >
          <GrUserExpert className="h-6 w-6" />
          <div>Hi, Ibini</div>
        </div>
        {userDropDown && (
          <>
            <div className="text-sm font-medium w-52 h-64 absolute top-24 bg-white rounded shadow ">
              <Link to="/accountOverview">
                <div className="flex items-center space-x-4 h-10 hover:bg-neutral-200 pl-2 ">
                  <GrUser />
                  <div>My Account</div>
                </div>
              </Link>
             <Link to="/orderindex"> 
             <div className="flex items-center space-x-4 h-10 hover:bg-neutral-200 pl-2 ">
                <GrHome />
                <div>Orders</div>
              </div>
             </Link>
              <Link to="/orderindex">
              <div className="flex items-center space-x-4 h-10 hover:bg-neutral-200 pl-2 ">
                <GrInbox />
                <div>Inbox</div>
              </div>
              </Link>
              <div className="flex items-center space-x-4 h-10 hover:bg-neutral-200 pl-2 ">
                <GrSave />
                <div>Saved Items</div>
              </div>
              <div className="flex items-center space-x-4 h-10 hover:bg-neutral-200 pl-2 ">
                <GrGift />
                <div>Voucher</div>
              </div>
              <hr className="w-[100%]"></hr>
              <div className="flex justify-center items-center h-12 text-orange-400 font-bold">
                <Link to="/login">
                  <div className="flex justify-center items-center rounded h-8 w-24 hover:bg-orange-300">
                    LOGOUT
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}

        <div className=" w-32 flex space-x-2">
          <GrCircleQuestion className="h-6 w-6" />
          <div>Help</div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

// 0% 0, 19% 10%, 100% 10%, 100% 100%, 0 100%, 0 10%
