import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-[284px] bg-[#1A112D] overflow-hidden flex items-center justify-between pt-[30px] relative">
      <img
        src="/FooterBg.png"
        alt="Footer Background Image"
        className="w-full h-auto opacity-[.03] absolute"
      />
      <div className="ml-[150px]">
        <h1 className="text-[62px] font-black mr-[40px] font-lobster text-white">
          PetVet
        </h1>
        <div className="flex gap-[15px] items-center mb-[40px] mt-[10px]">
          <a href="#">
            <FaFacebook
              color="white"
              size={20}
              className="hover:scale-105 duration-300 cursor-pointer relative z-[5]"
            />
          </a>
          <a href="#">
            <FaInstagram
              color="white"
              size={20}
              className="hover:scale-105 duration-300 cursor-pointer relative z-[5]"
            />
          </a>
          <a href="#">
            <FaTwitter
              color="white"
              size={20}
              className="hover:scale-105 duration-300 cursor-pointer relative z-[5]"
            />
          </a>
          <a href="#">
            <FaYoutube
              color="white"
              size={20}
              className="hover:scale-105 duration-300 cursor-pointer relative z-[5]"
            />
          </a>
        </div>
        <p className="opacity-60 text-white font-[200]">
          © 2025 VetPet. All rights reserved.
        </p>
      </div>
      <div className="relative mr-[80px]">
        <div className="flex items-center justify-center gap-[39px] mb-[15px]">
          <a href='/about'>
            <h3 className="text-[23px] text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">
              About
            </h3>
          </a>
          <h3 className="text-[23px] text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">
            Contact
          </h3>
          <h3 className="text-[23px] text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">
            Adopt a bet
          </h3>
          <h3 className="text-[23px] text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">
            Suppot
          </h3>
        </div>
        <div className="h-[.5px] w-[500px] bg-white/85 rounded-[1px] mb-[20px]" />
        <p className="text-white/70 text-[20px] font-thin">
          Address: United States, California, 26 ham street
        </p>
        <div className="flex items-center gap-[17px]">
          <p className="text-white/70 text-[20px] font-thin">
            Phone: +20 1234 567 892
          </p>
          <p className="text-white/70 text-[20px] font-thin">
            Email: contact@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
