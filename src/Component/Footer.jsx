import React from "react";
import {
  GrAddCircle,
  GrAmex,
  GrBluetooth,
  GrBook,
  GrCreditCard,
  GrFacebook,
  GrInstagram,
  GrPaypal,
  GrPinterest,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import {RiVisaLine, RiMastercardLine} from "react-icons/ri"
import Image from "./Image";

export default function Footer() {
  return (
    <div className="h-80 pt-12">
      <div className="bg-black h-40 flex space-x-20 items-start justify-center pt-8 ">
        <div>
          <Image
            width="120"
            height="120"
            imageUrl="/src/assets/logowithblackbg.png"
          />
        </div>
        <div className="text-white text-sm space-y-4">
          <div>
            <div>NEW TO JUMIA?</div>
            <div>
              Subscribe to our newsletter to get updates on our latest offers!
            </div>
          </div>
          <div className="flex space-x-6 h-12 ">
            <input
              className="text-black rounded w-80 outline outline-offset-2 outline-0 pl-4"
              type="text"
              placeholder="Email Address"
            ></input>
            <div className="flex space-x-4  ">
              <div className="border border-white w-20 h-12 text-sm rounded flex justify-center items-center hover:text-orange-400 hover:border-orange-400">
                MALE
              </div>
              <div className="border border-white w-20 h-12 text-sm rounded flex justify-center items-center hover:text-orange-400 hover:border-orange-400">
                FEMALE
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 w-96 space-y-4">
          <div className="flex space-x-4">
            <img
              className="h-10 w-12 rounded"
              src="/src/assets/jumialogo2.png"
              alt="jumia logo"
            ></img>
            <div className="text-sm text-white">
              <div>DOWNLOAD JUMIA FREE APP</div>
              <div>Get access to exclusive offers!</div>
            </div>
          </div>
          <div className="flex text-sm space-x-4 text-white">
            <div className="border border-white w-32 h-8 text-sm rounded flex justify-center items-center hover:text-orange-400 hover:border-orange-400">
              App Store
            </div>
            <div className="border border-white w-32 h-8 text-sm rounded flex justify-center items-center hover:text-orange-400 hover:border-orange-400">
              Google Play
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-500  pt-6" style={{ height: "500px" }}>
        <div className="flex space-x-40 justify-center text-white items-start">
          <div>
            <div>
              <div className="text-xs font-extrabold mb-4">
                <div>LET US HELP YOU</div>
              </div>
              <div className="text-xs space-y-2 ">
                <div className="hover:text-orange-400">Help Center</div>
                <div className="hover:text-orange-400">Contact Us</div>
                <div className="hover:text-orange-400">
                  How to shop on Jumia?
                </div>
                <div className="hover:text-orange-400">
                  Delivery options and timelines
                </div>
                <div className="hover:text-orange-400">
                  How to return a product on Jumia?
                </div>
                <div className="hover:text-orange-400">
                  Corporate and bulk purchases
                </div>
                <div className="hover:text-orange-400">Report a Product</div>
                <div className="hover:text-orange-400">
                  Ship your package anywhere in Nigeria
                </div>
                <div className="hover:text-orange-400">
                  Dispute Resolution Policy
                </div>
                <div className="hover:text-orange-400">
                  Returns and Refunds Policy
                </div>
              </div>
              <div className="text-white text-xs font-extrabold mt-8">
                <div>JOIN US ON</div>
              </div>
              <div className="flex space-x-8 mt-6">
                <GrFacebook />
                <GrYoutube />
                <GrInstagram />
                <GrTwitter />
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-extrabold mb-4">
              <div>ABOUT JUMIA</div>
            </div>
            <div className="text-xs space-y-2">
              <div className="hover:text-orange-400">About us</div>
              <div className="hover:text-orange-400">Jumia careers</div>
              <div className="hover:text-orange-400">Jumia Express</div>
              <div className="hover:text-orange-400">Terms and Conditions</div>
              <div className="hover:text-orange-400">Privacy Notice</div>
              <div className="hover:text-orange-400">Cookie Notice</div>
              <div className="hover:text-orange-400">Jumia Global</div>
              <div className="hover:text-orange-400">Official Stores</div>
              <div className="hover:text-orange-400">Flash Sales</div>
              <div className="hover:text-orange-400">
                Jumia Anniversary 2023
              </div>
            </div>
            <div className="text-white text-xs font-extrabold mt-6">
              <div>PAYMENT METHODS & DELIVERY PARTNERS</div>
            </div>
            <div className="flex space-x-6 mt-6 ">
              <GrBook/>
              <RiMastercardLine/>
              <RiVisaLine />
              <img style={{background:"white", color:"white"}} src="/src/assets/verve.svg"></img>
              <GrCreditCard />
              <GrPinterest />
              <GrBluetooth />
              <GrAmex />
            </div>
          </div>
          <div>
            <div className="text-xs font-extrabold mb-4">
              <div>MAKE MONEY WITH JUMIA</div>
            </div>
            <div className="text-xs space-y-2">
              <div className="hover:text-orange-400">Sell on Jumia</div>
              <div className="hover:text-orange-400">
                Become a Sales Consultant
              </div>
              <div className="hover:text-orange-400">
                Become a Logistics Service Partner
              </div>
              <div className="hover:text-orange-400">
                Join the Jumia DA Academy
              </div>
              <div className="hover:text-orange-400">
                Join the Jumia KOL Program
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-extrabold mb-4">
              <div>JUMIA INTERNATIONAL</div>
            </div>
            <div className="flex text-xs ">
              <div className="space-y-2">
                <div className="hover:text-orange-400">Algeria</div>
                <div className="hover:text-orange-400">Egypt</div>
                <div className="hover:text-orange-400">Ghana</div>
                <div className="hover:text-orange-400">Ivory Coast</div>
                <div className="hover:text-orange-400">Kenya</div>
              </div>
              <div className="space-y-2">
                <div className="hover:text-orange-400">Morocco</div>
                <div className="hover:text-orange-400">Senegal</div>
                <div className="hover:text-orange-400">Tunisia</div>
                <div className="hover:text-orange-400">Uganda</div>
                <div className="hover:text-orange-400">Zando</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[90%] mt-16 "></hr>
        </div>
        <div>
          <div>
            <GrPaypal/>
          <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
