import React from "react";
import { ReactDOM } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalBox(props) {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ height: "430px" }}>
          <div>
            <div className="pt-4 pb-4 font-semibold text-xl ml-6">
              Select a Pickup Station
            </div>
            <hr className="w-100%"></hr>
            <div className="pt-2 pb-2 text-xs font-semibold text-slate-500 ml-6">
              LOCATION:
            </div>
            <div className="flex text-xs font-semibold text-slate-500 space-x-96  ml-6">
              <div>Region:</div>
              <div>City:</div>
            </div>
            <div className="flex space-x-8  ml-6 mt-2">
              <form>
                <select className="h-10 w-96 border-2 text-sm outline outline-offset-2 outline-0">
                  <option value="region">Federal Capital Territory</option>
                  <option value="region">Enugu</option>
                  <option value="region">Kaduna</option>
                  <option value="region">Lagos</option>
                  <option value="region">Ibadan</option>
                  <option value="region">Port Harcourt</option>
                  <option value="region">Anambra</option>
                  <option value="region">Zamfara</option>
                  <option value="region">Delta</option>
                </select>
              </form>
              <form>
                <select className="h-10 w-96 border-2 text-sm outline outline-offset-2 outline-0 text-sm">
                  <option value="city">Select</option>
                  <option value="city">ABUJA- GARKI AREA 11</option>
                  <option value="city">ABUJA- GWARINPA 1ST AVENUE</option>
                  <option value="city">ABUJA- KUBWA 2/1 PHASE 1</option>
                  <option value="city">ABUJA- KUBWA 2/1 PHASE 2</option>
                  <option value="city">ABUJA- ASOKORO</option>
                  <option value="city">ABUJA- CBD</option>
                  <option value="city">ABUJA- GARKI2</option>
                  <option value="city">ABUJA- GUDU</option>
                  <option value="city">ABUJA- JABI</option>
                  <option value="city">ABUJA- KARU</option>
                  <option value="city">ABUJA- KUJE</option>
                  <option value="city">ABUJA- MARARABA</option>
                  <option value="city">ABUJA- Prince and Princess</option>
                  <option value="city">ABUJA- WUSE ZONE 4</option>
                  <option value="city">
                    Airport Roead Sauka /Trademore / Airport
                  </option>
                  <option value="city">GWAGWALADA </option>
                  <option value="city">Jikowyi </option>
                </select>
              </form>
            </div>
            <div className="pt-2 pb-2 text-xs font-semibold text-slate-500 ml-6">
              PICK UP STATIONS NEAR YOU:
            </div>
            <hr className="w-100%"></hr>
            <div className="pt-20 flex flex-col justify-center items-center ml-6">
              <div className="text-2xl text-center font-bold text-slate-400">
                Unfortunately there are no Pickup Stations available in the city
                indicated in your address.
              </div>
              <div className="font-semibold text-slate-300">
                Please select another city or close the pop-up to select another
                shipping option.
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ModalBox };
