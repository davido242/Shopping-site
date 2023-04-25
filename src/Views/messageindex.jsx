import React from "react";
import {
  GrMail,
} from "react-icons/gr";

export default function MessageIndex() {
  return (
    <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center ">
      <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%]">
        <div className="h-12 flex items-center text-xl font-medium">
          <div className="ml-4">Inbox Messages</div>
        </div>
        <hr className="w-[100%]"></hr>
        <div className="flex justify-center h-[90%] items-center">
          <div className="flex flex-col justify-center items-center h-80 w-[50%] space-y-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full flex justify-center items-center">
              <GrMail className="h-16 w-16" />
            </div>
            <div className="text-base font-medium">
              You don't have any messages
            </div>
            <div className="text-sm ml-4 text-center">
              Here you will be able to see all the messages that we send you. <br/>
              Stay tuned.
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
