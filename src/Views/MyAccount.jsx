import React from "react";
import { GrCreditCard, GrEdit } from "react-icons/gr";
import NavBar from "../Component/NavBar";
import { Sidebar } from "../Component/SideBar";
import AccountOverView from "./AccountOverview";

export default function MyAccount() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Sidebar/>
      </div>
      <div className=" pt-8 bg-gray-100 h-screen w-5/5 flex justify-center">
       <AccountOverView/>
      </div>
    </div>
  );
}
