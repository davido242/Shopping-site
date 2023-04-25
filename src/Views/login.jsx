import React from "react";
import { GrFacebook, GrTwitter } from "react-icons/gr";


export default function Login() {
  return (
    <div className=" h-fit flex flex-col justify-center items-center border-4">
      <div className="flex flex-col justify-center items-center bg-white w-[500px]">
        <div className="pt-12">
          <img
            className="w-16 h-16"
            src="/src/assets/Jumia-logo.jpeg"
            alt="jumailogo"
          />
        </div>
        <div className="font-bold text-2xl pt-4 pb-2 ">
          <div>Welcome to Jumia</div>
        </div>
        <div className="text-slate-600 font-semibolds text-center">
          <div className="pb-2">
            Type your e-mail or phone number to log in or create a jumia
            account.
          </div>
        </div>
        <div className="border-2 border-orange-400 h-14 w-96 flex justify-center mb-12 rounded">
          <input
            className="outline outline-offset-2 outline-0"
            type="text"
            placeholder="Email or Mobile Number*"
          />
        </div>
        <div className="border-2 border-orange-400 h-14 w-96 flex justify-center mb-12 rounded">
          <input
            className="outline outline-offset-2 outline-0"
            type="password"
            placeholder="Enter your Password*"
          />
        </div>
        <div className="shadow shadow-orange-700 h-14 w-96 flex justify-center text-white bg-orange-400 mb-12 rounded">
          <div className="pt-5">Continue</div>
        </div>
        <div className="shadow shadow-blue-700 h-14 w-96 flex justify-center text-white bg-blue-600 mb-12 pt-5 rounded">
          <GrFacebook />
          <div>Log in with Facebook</div>
        </div>
        <div className="shadow shadow-black-700 h-14 w-96 flex justify-center text-white bg-black mb-4 pt-5 text-white rounded">
          <GrTwitter/>
          <div>Log in with Apple</div>
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
