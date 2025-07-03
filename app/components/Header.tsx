import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between items-center p-[25px] px-[50px] relative z-[1000]">
      <div className="flex gap-[25px] items-center max-[910px]:gap-[22px] max-[835px]:hidden">
        <a href="/">
          <h1 className="text-[62px] font-black mr-[40px] font-lobster cursor-pointer">
            PetVet
          </h1>
        </a>
        <a href="/about">
          <i>
            <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px]">
              About
            </h3>
          </i>
        </a>
        <a href="/adopt">
          <i>
            <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px]">
              Adopt
            </h3>
          </i>
        </a>
        <a href="/support">
          <i>
            <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px]">
              Support
            </h3>
          </i>
        </a>
        <a href="/contact">
          <i>
            <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px]">
              Contact
            </h3>
          </i>
        </a>
      </div>
      <a href="/">
        <h1 className="text-[62px] font-black mr-[40px] font-lobster max-[835px]:block hidden cursor-pointer max-[360px]:text-[50px]">
          PetVet
        </h1>
      </a>
      <div className="flex gap-[15px] items-center max-[520px]:hidden">
        <a href="#">
          <FaFacebook
            color="#2A1458"
            size={25}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </a>
        <a href="#">
          <FaInstagram
            color="#2A1458"
            size={25}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </a>
        <a href="#">
          <FaTwitter
            color="#2A1458"
            size={25}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </a>
        <a href="#">
          <FaYoutube
            color="#2A1458"
            size={25}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </a>
      </div>
      <RiMenu3Fill
        color="#2A1458"
        size={30}
        onClick={() => setToggleMenu(true)}
        className="cursor-pointer duration-300 max-[835px]:block hidden hover:scale-105"
      />
      <AnimatePresence mode="wait">
        {toggleMenu && (
          <motion.div
            key="menuHeader"
            variants={{
              shown: { opacity: 1, backdropFilter: "blur(24px)" },
              hidden: { opacity: 0, backdropFilter: "blur(0)" },
            }}
            initial="hidden"
            animate="shown"
            exit="hidden"
            className="fixed left-0 top-0 w-full h-screen z-[1000000] flex flex-col items-center justify-evenly"
          >
            <motion.div className="absolute left-0 top-0 w-full h-full backdrop-blur-xl cursor-pointer duration-[400ms] bg-black/40 flex flex-col items-center justify-between z-[-1]" />
            <div className="w-full justify-around flex items-center">
              <a href="/">
                <h1 className="text-[50px] font-black mr-[40px] font-lobster text-white cursor-pointer hover:scale-105 duration-300">
                  PetVet
                </h1>
              </a>
              <IoClose
                color="white"
                size={27}
                className="cursor-pointer hover:scale-105 duration-300"
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <a href="/about">
              <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px] text-white text-center hover:bg-white/10 p-[25px] px-[40px] rounded-[6px]">
                About
              </h3>
            </a>
            <a href="/adopt">
              <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px] text-white text-center hover:bg-white/10 p-[25px] px-[40px] rounded-[6px]">
                Adopt
              </h3>
            </a>
            <a href="/support">
              <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px] text-white text-center hover:bg-white/10 p-[25px] px-[40px] rounded-[6px]">
                Support
              </h3>
            </a>
            <a href="/contact">
              <h3 className="text-[24px] font-italic hover:scale-105 duration-300 max-[910px]:text-[20px] text-white text-center hover:bg-white/10 p-[25px] px-[40px] rounded-[6px]">
                Contact
              </h3>
            </a>
            <div className="flex gap-[15px] items-center">
              <a href="#">
                <FaFacebook
                  color="white"
                  size={25}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              </a>
              <a href="#">
                <FaInstagram
                  color="white"
                  size={25}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              </a>
              <a href="#">
                <FaTwitter
                  color="white"
                  size={25}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              </a>
              <a href="#">
                <FaYoutube
                  color="white"
                  size={25}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
