import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A112D] overflow-hidden pt-8 pb-4 px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 relative min-h-[320px]">
      <img
        src="/FooterBg.png"
        alt="Footer Background Image"
        className="w-full h-full object-cover opacity-[.03] absolute left-0 top-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center md:items-start md:ml-24 w-full md:w-auto">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black font-lobster text-white mb-2 md:mb-0">PetVet</h1>
        <div className="flex gap-4 items-center mb-6 mt-2">
          <a href="#" aria-label="Facebook">
            <FaFacebook color="white" size={22} className="hover:scale-105 duration-300 cursor-pointer relative z-[5]" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram color="white" size={22} className="hover:scale-105 duration-300 cursor-pointer relative z-[5]" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter color="white" size={22} className="hover:scale-105 duration-300 cursor-pointer relative z-[5]" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube color="white" size={22} className="hover:scale-105 duration-300 cursor-pointer relative z-[5]" />
          </a>
        </div>
        <p className="opacity-60 text-white font-light text-sm sm:text-base text-center md:text-left">© 2025 VetPet. All rights reserved.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-auto md:mr-20 mt-8 md:mt-0">
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 mb-4 w-full">
          <a href='/about'>
            <h3 className="text-base sm:text-lg md:text-xl text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">About</h3>
          </a>
          <h3 className="text-base sm:text-lg md:text-xl text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">Contact</h3>
          <h3 className="text-base sm:text-lg md:text-xl text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">Adopt a pet</h3>
          <h3 className="text-base sm:text-lg md:text-xl text-white/85 font-light hover:scale-105 duration-300 cursor-pointer hover:text-white">Support</h3>
        </nav>
        <div className="h-px w-full sm:w-[300px] md:w-[500px] bg-white/85 rounded mb-4" />
        <p className="text-white/70 text-sm sm:text-base md:text-lg font-thin text-center md:text-right w-full">Address: United States, California, 26 ham street</p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 sm:gap-6 mt-2 w-full">
          <p className="text-white/70 text-sm sm:text-base md:text-lg font-thin">Phone: +20 1234 567 892</p>
          <p className="text-white/70 text-sm sm:text-base md:text-lg font-thin">Email: contact@example.com</p>
        </div>
      </div>
    </footer>
  );
}
