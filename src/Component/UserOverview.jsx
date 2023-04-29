// import React from "react";
// import {
//   // GrUser,
//   // GrHome,
//   // GrInbox,
//   // GrSave,
//   // GrGift,
//   // GrTime,
//   GrEdit,
//   GrCreditCard,
//   // GrTicket,
// } from "react-icons/gr";
// import NavBar from "../Component/NavBar";

// export default function UserOverview() {
//   return (
//     <div className=" pt-8 bg-gray-100">
     
//       <div>
//         <div className="h-screen w-5/5 flex justify-center gap-4 ">
//           {/* <div className="bg-white border w-72 h-[78%] mt-4 rounded-md border-4 border-green-500">
//             <div className="font-normal text-sm ">
//               <div className="flex h-12 items-center pl-4">
//                 <GrUser className="h-4 w-6" />
//                 <div>My Jumia Account</div>
//               </div>
//               <div className="flex items-center h-12 hover:bg-neutral-200 pl-4">
//                 <GrHome className="h-4 w-6" />
//                 <div>Orders</div>
//               </div>
//               <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
//                 <GrInbox className="h-4 w-6" />
//                 <div>Inbox</div>
//               </div>
//               <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
//                 <GrSave className="h-4 w-6" />
//                 <div>Pending Reviews</div>
//               </div>
//               <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
//                 <GrTicket className="h-4 w-6" />
//                 <div>Voucher</div>
//               </div>
//               <div className="flex h-12 items-center hover:bg-neutral-200 pl-4">
//                 <GrGift className="h-4 w-6" />
//                 <div>Saved Items</div>
//               </div>
//               <div className="flex pb-2 h-12 items-center hover:bg-neutral-200 pl-4">
//                 <GrTime className="h-4 w-6" />
//                 <div>Recently Viewed</div>
//               </div>
//             </div>
//             <hr className="w-[100%]"></hr>
//             <div className="font-normal text-sm mb-4 ">
//               <div className="h-12 hover:bg-neutral-100 pl-4 flex items-center">
//                 Account Management
//               </div>
//               <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
//                 Address Book
//               </div>
//               <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
//                 Newsletter Preference
//               </div>
//               <div className="h-12 hover:bg-neutral-200 pl-4 flex items-center">
//                 Close Account
//               </div>
//             </div>
//             <hr className="w-[100%]"></hr>
//             <div className="flex justify-center items-center text-sm text-orange-400 font-medium mt-4 mb-4">
//                 <div>LOGOUT</div>
//             </div> */}
//           {/* </div> */}
//           <div className="bg-white border rounded-md w-[64%] mt-4 h-[78%] border-4 border-green-500">
//             <div className="text-xl font-normal mt-4 mb-4 ">
//               <div className="ml-4">Account Overview</div>
//             </div>
//             <hr className="w-[100%]"></hr>
//             <div>
//               <div className="flex justify-center space-x-4 mt-4">
//                 <div className="w-[48%] h-52 border rounded ">
//                   <div className="ml-4 mt-4 mb-4 text-sm">ACCOUNT DETAILS</div>
//                   <hr className="w-[100%]"></hr>
//                   <div className="ml-4">
//                     <div className="text-base mt-4">Ibini Chinasa</div>
//                     <div className="text-gray-500 text-sm">
//                       ibinichinasajoy@gmail.com
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[48%] h-52 border rounded">
//                   <div className="flex items-center space-x-60">
//                     <div className="ml-4 mt-4 mb-4 text-sm">ADDRESS BOOK</div>
//                     <GrEdit />
//                   </div>
//                   <hr className="w-[100%]"></hr>
//                   <div className="ml-4">
//                     <div className="text-base mt-4">
//                       <div>Your default shipping address:</div>
//                     </div>
//                     <div>Ibini Chinasa Joy</div>
//                     <div className="text-gray-500 text-sm">
//                       <div>
//                         Opposite living faith church gishiri, Abuja Gishiri road
//                         before police station, Abuja NICON JUNCTION, Federal
//                         Capital Territory
//                       </div>
//                       <div>+234 8109771480</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-center space-x-4 mt-4 ">
//                 <div className="w-[48%] h-40 border rounded ">
//                   <div className="ml-4 mt-4 mb-4 text-sm">
//                     JUMIA STORE CREDIT
//                   </div>
//                   <hr className="w-[100%]"></hr>
//                   <div className="ml-4">
//                     <div className="flex space-x-6 items-center mt-4 font-bold">
//                       <GrCreditCard className="h-6 w-6" />
//                       <div>₦ 500000</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[48%] h-40 border rounded">
//                   <div className="flex items-center space-x-60">
//                     <div className="ml-4 mt-4 mb-4 text-sm">
//                       NEWSLETTER PREFERENCES
//                     </div>
//                   </div>
//                   <hr className="w-[100%]"></hr>
//                   <div className="ml-4 mt-4">
//                     <div>
//                       You are currently not subscribed to any of our
//                       newsletters.
//                     </div>
//                     <div className="text-sm text-orange-400 pt-4">
//                       EDIT NEWSLETTER PREFRENCES
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
