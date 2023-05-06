import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai"

export default function CreateAccount() {
  return (
    <div className=" h-fit flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white w-[500px]">
        <div className="pt-12">
          <img
            className="w-16 h-16"
            src="/src/assets/Jumia-logo.jpeg"
            alt="jumailogo"
          />
        </div>
        <div className="font-bold text-2xl pt-4 pb-2 ">
          <div>Create your account</div>
        </div>
        <div className="text-slate-600 font-semibolds text-center mb-8">
          <div>Let's get started by creating your account.</div>
          <div>To keep your account safe, we need a strong password</div>
        </div>
        <div className="border border-black h-14 w-96 flex items-center mb-12 rounded space-x-4">
          <input 
            className="w-80 outline outline-offset-2 outline-0 ml-4"
            type="password"
            placeholder="Password"
          />
          <AiOutlineEyeInvisible className="w-8 h-6"/>
        </div>
       
        <div className=" border border-black h-14 w-96 flex items-center mb-12 rounded space-x-4">
          <input
            className="w-80 outline outline-offset-2 outline-0 ml-4 "
            type="password"
            placeholder="Confirm Password"
          />
          <AiOutlineEyeInvisible className="w-8 h-6"/>
        </div>
        <div className="shadow shadow-orange-700 h-14 w-96 flex justify-center text-white bg-orange-400 mb-12 rounded">
          <div className="pt-5">Continue</div>
        </div>
        <div className="text-sm font-semibold text-center">
          <div className="">
            For further support, you may visit the Help Center or contact
          </div>
          <div className="">our customer service team.</div>
        </div>
        <div>
          <img
            className="w-20 h-12 mt-6"
            src="/src/assets/jumia2.png"
            alt="jumailogo"
          />
        </div>
      </div>
    </div>
  );
}
