import React from "react";
import { GrCreditCard, GrEdit } from "react-icons/gr";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Component/NavBar";
import { Sidebar } from "../Component/SideBar";
import AccountOverView from "./AccountOverview";
import OrderIndex from "./orderIndex";

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

       

       <Routes>
        
        <Route exact path="order-index" element={<OrderIndex />} />
        <Route exact path="account-overview" element={<AccountOverView/>} />
        {/* <Route path="productdetails/:productID" element={<ProductDetails />} /> */}
      </Routes>
      </div>
    </div>
  );
}
