import React from "react";
import { GrCreditCard, GrEdit } from "react-icons/gr";


export default function AccountOverView() {
  return (
    
      <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center">
      <div className="flex justify-center gap-4 "></div>
      <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%] ">
        <div className="text-xl font-normal mt-4 mb-4 ">
          <div className="ml-4">Account Overview</div>
        </div>
        <hr className="w-[100%]"></hr>
        <div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-[48%] h-52 border rounded ">
              <div className="ml-4 mt-4 mb-4 text-sm">ACCOUNT DETAILS</div>
              <hr className="w-[100%]"></hr>
              <div className="ml-4">
                <div className="text-base mt-4">Ibini Chinasa</div>
                <div className="text-gray-500 text-sm">
                  ibinichinasajoy@gmail.com
                </div>
              </div>
            </div>
            <div className="w-[48%] h-52 border rounded">
              <div className="flex items-center space-x-60">
                <div className="ml-4 mt-4 mb-4 text-sm">ADDRESS BOOK</div>
                <GrEdit />
              </div>
              <hr className="w-[100%]"></hr>
              <div className="ml-4">
                <div className="text-base mt-4">
                  <div>Your default shipping address:</div>
                </div>
                <div>Ibini Chinasa Joy</div>
                <div className="text-gray-500 text-sm">
                  <div>
                    Opposite living faith church gishiri, Abuja Gishiri road
                    before police station, Abuja NICON JUNCTION, Federal Capital
                    Territory
                  </div>
                  <div>+234 8109771480</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center space-x-4 mt-4 ">
            <div className="w-[48%] h-40 border rounded ">
              <div className="ml-4 mt-4 mb-4 text-sm">JUMIA STORE CREDIT</div>
              <hr className="w-[100%]"></hr>
              <div className="ml-4">
                <div className="flex space-x-6 items-center mt-4 font-bold">
                  <GrCreditCard className="h-6 w-6" />
                  <div>₦ 500000</div>
                </div>
              </div>
            </div>
            <div className="w-[48%] h-40 border rounded">
              <div className="flex items-center space-x-60">
                <div className="ml-4 mt-4 mb-4 text-sm">
                  NEWSLETTER PREFERENCES
                </div>
              </div>
              <hr className="w-[100%]"></hr>
              <div className="ml-4 mt-4">
                <div>
                  You are currently not subscribed to any of our newsletters.
                </div>
                <div className="text-sm text-orange-400 pt-4">
                  EDIT NEWSLETTER PREFRENCES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


