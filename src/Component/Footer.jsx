import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="border-4 border-red-500 h-80">
      <div className="bg-black h-40 flex space-x-12">
        <div>
          <Logo />
        </div>
        <div className="text-white">
          <div>NEW TO JUMIA?</div>
          <div>
            Subscribe to our newsletter to get updates on our latest offers!
          </div>
          <div className="flex space-x-6 h-12 ">
            <input className="text-black rounded w-80 outline outline-offset-2 outline-0" type="text" placeholder="Email Address"></input>
           <div className="border border-white w-20 rounded ">MALE</div>
           <div className="border border-white w-20 rounded">FEMALE</div>
          </div>
        </div>
      </div>
      <div>
        <div>Ash background</div>
      </div>
    </div>
  );
}
